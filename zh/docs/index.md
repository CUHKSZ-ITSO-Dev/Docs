---
hide:
  - navigation
  - toc
  - title
---

<style>
.md-main,
.md-container,
.md-content,
.md-main__inner,
body {
    background-color: #4051b5 !important;
}

.md-header,
.md-header__inner,
.md-tabs {
    background-color: #4051b5 !important;
}

.md-sidebar,
.md-sidebar--primary,
.md-sidebar--secondary {
    background-color: #4051b5 !important;
}

.md-footer,
.md-footer-meta,
.md-footer-meta__inner {
    background-color: #4051b5 !important;
}

.md-top {
    background-color: #5363bd !important;
    color: rgba(255, 255, 255, 0.8);
}

.md-content h1:first-child,
.md-content .md-content__inner > h1:first-child {
    display: none !important;
}

.md-source-file,
.md-footer__inner {
    display: none !important;
}

.container {
    margin: max(0px, calc(50vh - 450px)) auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.animate-text p {
    margin: 0;
    display: none;
    font-size: 42px;
    font-weight: 600;
    color: #fff;
    text-align: center;
}

.animate-text p.active {
    display: block;
}

.title-badge-item {
    padding: 12px 24px;
    border-radius: 50px;
    background-color: #5363bd;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
}

.property {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    gap: 60px;
}

.property-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.property-item-number {
    font-size: 48px;
    font-weight: bold;
    color: #fff;
}

.property-item-text {
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
}

.property-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.property-badge-item {
    padding: 12px 24px;
    border-radius: 50px;
    background-color: #5363bd;

    font-size: 20px;
    color: #fff;
}

.btn-container {
    display: flex;
    gap: 32px;
}

.btn {
    margin-top: 16px;
    padding: 12px 32px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.btn:hover {
    background-color: #526cfe;
}

.btn-primary {
    background-color: #dd2e57;
    color: #fff;
}

.btn-secondary {
    background-color: #4051b5;
    color: #fff;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .container {
        margin: max(0px, calc((100vh - 648px)/2)) auto 0 auto;
        gap: 24px;
        padding: 0 16px;
    }

    .animate-text p {
        font-size: 28px;
        text-align: center;
    }

    .title-badge-item {
        padding: 10px 16px;
        font-size: 16px;
        text-align: center;
        line-height: 1.4;
    }

    .property {
        justify-content: space-around;
        gap: 16px;
        padding: 0 8px;
    }

    .property-item-number {
        font-size: 28px;
    }

    .property-item-text {
        font-size: 14px;
    }

    .property-badge {
        flex-direction: column;
        gap: 12px;
        width: 100%;
        align-items: center;
    }

    .property-badge-item {
        padding: 10px 16px;
        font-size: 16px;
        text-align: center;
        width: 220px;
    }

    .btn-container {
        flex-direction: row;
        gap: 16px;
        width: 100%;
        justify-content: center;
    }

    .btn {
        padding: 10px 20px;
        font-size: 16px;
        width: auto;
        min-width: 120px;
    }
}

@media (max-width: 480px) {
    .container {
        margin: max(0px, calc((100vh - 648px)/2)) auto 0 auto;
        gap: 20px;
        padding: 0 12px;
    }

    .animate-text p {
        font-size: 20px;
    }

    .title-badge-item {
        padding: 8px 12px;
        font-size: 14px;
    }

    .property {
        justify-content: space-around;
        gap: 12px;
        padding: 0 8px;
    }

    .property-item-number {
        font-size: 24px;
    }

    .property-item-text {
        font-size: 12px;
    }

    .property-badge {
        gap: 10px;
        align-items: center;
    }

    .property-badge-item {
        padding: 8px 12px;
        font-size: 14px;
        width: 180px;
    }

    .btn-container {
        flex-direction: row;
        justify-content: center;
        gap: 12px;
    }

    .btn {
        padding: 8px 16px;
        font-size: 14px;
        width: auto;
        min-width: 100px;
    }
}

@media (max-width: 400px) {
    .container {
        margin: max(0px, calc((100vh - 648px)/2)) auto 0 auto;
        gap: 20px;
        padding: 0 12px;
    }

    .animate-text p {
        font-size: 18px;
    }

    .title-badge-item {
        padding: 6px 10px;
        font-size: 12px;
    }

    .property-badge-item {
        padding: 6px 10px;
        font-size: 12px;
        width: 160px;
    }

    .btn {
        padding: 6px 12px;
        font-size: 12px;
        min-width: 80px;
    }

    .btn-container {
        gap: 8px;
    }
}
</style>

<div class="container">
    <div class="animate-text">
        <p class="active" id="text-0">为港中深师生打造安全可靠高效的 GPT 平台</p>
        <p id="text-1">支持 ChatGPT DeepSeek Qwen 等多种模型</p>
        <p id="text-2">内置联网搜索、AI绘图、AI检测等多种强大工具</p>
    </div>
    <div class="title-badge">
        <div class="title-badge-item">
            香港中文大学（深圳）GPT 服务综合文档系统
        </div>
    </div>
    <div class="property">
        <div class="property-item">
            <div class="property-item-number">100%</div>
            <div class="property-item-text">数据安全</div>
        </div>
        <div class="property-item">
            <div class="property-item-number">10+</div>
            <div class="property-item-text">AI模型</div>
        </div>
        <div class="property-item">
            <div class="property-item-number">99.9%</div>
            <div class="property-item-text">服务可用性</div>
        </div>
    </div>
    <div class="property-badge">
        <div class="property-badge-item">🚀 多模型支持</div>
        <div class="property-badge-item">💰 强大的工具集成</div>
        <div class="property-badge-item">🛡️ 安全稳定，高可用性</div>
    </div>
    <div class="btn-container">
        <a href="manual/getting-started/" style="text-decoration: none;">
            <button class="btn btn-primary">快速开始</button>
        </a>
        <a href="models/" style="text-decoration: none;">
            <button class="btn btn-secondary">模型信息</button>
        </a>
    </div>
</div>
