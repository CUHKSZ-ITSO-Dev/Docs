// 用于跟踪动画实例，确保在重新初始化时可以清理
let homePageTimeline = null;
let isAnimationInitializing = false;

// 获取当前页面的原始文字内容
function getOriginalTexts() {
    const paragraphs = document.querySelectorAll('.animate-text p');
    const texts = [];

    paragraphs.forEach((p) => {
        // 如果段落已经被anime.js分割过，获取原始文本
        if (p.querySelector('.char, .word')) {
            texts.push(p.textContent.trim());
        } else {
            // 直接使用当前的文本内容
            texts.push(p.textContent.trim());
        }
    });

    return texts;
}

// 初始化首页动画的函数
function initHomePageAnimation() {
    // 防止重复初始化
    if (isAnimationInitializing) {
        return;
    }

    // 如果不在首页，直接返回
    if (!document.querySelector('.animate-text')) {
        return;
    }

    // 检查 anime.js 是否已加载
    if (typeof anime === 'undefined') {
        // 如果 anime.js 还没加载，等待一段时间后重试
        setTimeout(initHomePageAnimation, 100);
        return;
    }

    isAnimationInitializing = true;

    // 清理之前的动画实例
    if (homePageTimeline) {
        homePageTimeline.pause();
        homePageTimeline = null;
    }

    // 更彻底地清理之前可能存在的文本分割元素
    const animateTextContainer = document.querySelector('.animate-text');
    if (animateTextContainer) {
        // 获取原始文字内容（动态从HTML读取）
        const originalTexts = getOriginalTexts();
        const paragraphs = animateTextContainer.querySelectorAll('p');

        // 恢复原始文本内容并清理动画状态
        paragraphs.forEach((p, index) => {
            if (originalTexts[index]) {
                p.innerHTML = originalTexts[index];
            }
            p.classList.remove('active');
        });

        // 设置第一个为 active
        if (paragraphs[0]) {
            paragraphs[0].classList.add('active');
        }
    }

    const { createTimeline, stagger, text } = anime;

    const p_list = document.querySelectorAll('.animate-text p');

    // 重新应用文本分割
    const { words: wordElements_0, chars: charElements_0 } = text.split('.animate-text p#text-0', {
        words: { wrap: 'clip' },
        chars: true,
    });
    const { words: wordElements_1, chars: charElements_1 } = text.split('.animate-text p#text-1', {
        words: { wrap: 'clip' },
        chars: true,
    });
    const { words: wordElements_2, chars: charElements_2 } = text.split('.animate-text p#text-2', {
        words: { wrap: 'clip' },
        chars: true,
    });

    // 创建新的时间线动画
    homePageTimeline = createTimeline({
        loop: true,
        defaults: { ease: 'inOut(3)', duration: 750 },
    })
        .add(wordElements_0, {
            y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
        }, stagger(125))
        .add(charElements_0, {
            y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
            delay: 1000,
        }, stagger(10, { from: 'random' }))
        .call(() => {
            p_list.forEach(p => {
                p.classList.remove('active');
            });
            p_list[1].classList.add('active');
        })
        .add(wordElements_1, {
            y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
        }, stagger(125))
        .add(charElements_1, {
            y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
            delay: 1000,
        }, stagger(10, { from: 'random' }))
        .call(() => {
            p_list.forEach(p => {
                p.classList.remove('active');
            });
            p_list[2].classList.add('active');
        })
        .add(wordElements_2, {
            y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
        }, stagger(125))
        .add(charElements_2, {
            y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
            delay: 1000,
        }, stagger(10, { from: 'random' }))
        .call(() => {
            p_list.forEach(p => {
                p.classList.remove('active');
            });
            p_list[0].classList.add('active');
        })
        .init();

    // 标记初始化完成
    isAnimationInitializing = false;
}

// 监听 DOM 加载完成事件（用于首次加载）
document.addEventListener('DOMContentLoaded', initHomePageAnimation);

// 监听 MkDocs SPA 导航事件（用于后续页面切换）
document.addEventListener('DOMContentLoaded', function () {
    // 监听 MkDocs 的即时导航事件
    if (typeof app !== 'undefined' && app.router) {
        // MkDocs Material 的路由变化监听
        app.router.addEventListener('navigate', function () {
            // 延迟一点时间确保 DOM 更新完成
            setTimeout(initHomePageAnimation, 50);
        });
    }
});

// // // 作为备用方案，监听 hashchange 和 popstate 事件
// window.addEventListener('hashchange', function () {
//     setTimeout(initHomePageAnimation, 100);
// });

// 增强的浏览器前后退处理
window.addEventListener('popstate', function () {
    // 使用更长的延迟和多次尝试来确保 DOM 完全更新
    let attempts = 0;
    const maxAttempts = 5;

    function tryInitAnimation() {
        attempts++;

        // 检查是否在首页且 DOM 已准备好
        if (document.querySelector('.animate-text')) {
            initHomePageAnimation();
        } else if (attempts < maxAttempts) {
            // 如果还没准备好，继续尝试
            setTimeout(tryInitAnimation, 100);
        }
    }

    // 初始延迟后开始尝试
    setTimeout(tryInitAnimation, 150);
});

// 添加额外的 hashchange 监听（针对某些边缘情况）
window.addEventListener('hashchange', function () {
    setTimeout(function () {
        if (document.querySelector('.animate-text')) {
            initHomePageAnimation();
        }
    }, 200);
});

// 使用 MutationObserver 监听页面内容变化（更可靠的方案）
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function (mutations) {
        let shouldInitAnimation = false;

        mutations.forEach(function (mutation) {
            // 检查是否有新增的首页动画元素
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.querySelector && node.querySelector('.animate-text')) {
                            shouldInitAnimation = true;
                            break;
                        } else if (node.classList && node.classList.contains('animate-text')) {
                            shouldInitAnimation = true;
                            break;
                        }
                    }
                }
            }

            // 也检查属性变化，这可能发生在浏览器前后退时
            if (mutation.type === 'attributes' && mutation.target.classList &&
                mutation.target.classList.contains('animate-text')) {
                shouldInitAnimation = true;
            }
        });

        if (shouldInitAnimation) {
            // 稍微延迟以确保 DOM 完全更新
            setTimeout(initHomePageAnimation, 150);
        }
    });

    // 观察整个文档的变化，包括属性变化
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
}

// 兜底机制：定期检查并重启动画（仅在首页且动画未运行时）
setInterval(function () {
    // 只有在首页且没有正在运行的动画时才重启
    if (document.querySelector('.animate-text') && !homePageTimeline && !isAnimationInitializing) {
        // 检查文本元素是否可能处于错误状态
        const textElements = document.querySelectorAll('.animate-text p');
        let needsReinit = false;

        textElements.forEach(p => {
            // 如果文本被分割但没有动画，说明可能出了问题
            if (p.querySelector('.char, .word') && !homePageTimeline) {
                needsReinit = true;
            }
        });

        if (needsReinit) {
            console.log('检测到动画状态异常，重新初始化...');
            initHomePageAnimation();
        }
    }
}, 2000); // 每2秒检查一次