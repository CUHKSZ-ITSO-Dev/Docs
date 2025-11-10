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
    font-size: 40px;
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

/*浅色模式适配*/
@media (prefers-color-scheme: light) {
    .md-main,
    .md-container,
    .md-content,
    .md-main__inner,
    body {
        background-color: #f0f0f0 !important;
    }

    .md-header,
    .md-header__inner,
    .md-tabs {
        background-color: #f0f0f0 !important;
    }

    .md-sidebar,
    .md-sidebar--primary,
    .md-sidebar--secondary {
        background-color: #f0f0f0 !important;
    }

    .md-footer,
    .md-footer-meta,
    .md-footer-meta__inner {
        background-color: #f0f0f0 !important;
    }

    .animate-text p.active {
        color: #222;
    }

    .title-badge-item {
        background-color: #e0e0e0;
        color: #222;
    }

    .property-badge-item {
        background-color: #e0e0e0;
        color: #000;
    }
}
</style>

<div class="container">
    <div class="animate-text">
        <p class="active" style="font-size:36px;">团队介绍与招聘信息</p>
    </div>
    <div class="title-badge">
        <div class="title-badge-item" >
            ITSO 学生助理开发团队
        </div>
    </div>

    <div class="logo-container">
        <img src="logo.png" alt="ITSO Logo" class="logo" style="width:240px;padding:24px;">
    </div>

    <div class="property-badge" style="margin-bottom:24px;">
        <div class="property-badge-item">💡 真实项目实践</div>
        <div class="property-badge-item">🚀 技术成长平台</div>
        <div class="property-badge-item">🤝 高效协作氛围</div>
    </div>
    <div class="property" style="margin-bottom:32px;">
        <div class="property-item">
            <div class="property-item-number">3+</div>
            <div class="property-item-text">代表项目</div>
        </div>
        <div class="property-item">
            <div class="property-item-number">4</div>
            <div class="property-item-text">招聘岗位</div>
        </div>
        <div class="property-item">
            <div class="property-item-number">25元</div>
            <div class="property-item-text">薪酬/工时</div>
        </div>
    </div>
    <div style="width:100%;max-width:900px;background:rgba(255,255,255,0.08);border-radius:16px;padding:32px 24px;margin-bottom:32px;">
        <h2 style="color:#fff;margin-bottom:16px;font-weight:bold;font-size:26px;">关于我们</h2>
        <p style="color:rgba(255,255,255,0.85);font-size:18px;">
            我们是 ITSO（资讯科技服务处）学生助理团队开发小组，专注于信息技术相关软件的设计与开发，致力于为用户提供高效、安全、创新的 IT 服务。
        </p>
        <div style="margin-top:24px;">
            <h3 style="color:#fff;font-weight:bold;font-size:26px;">我们的优势</h3>
            <ul style="color:rgba(255,255,255,0.85);font-size:18px;">
                <li>参与真实项目，获得实战经验</li>
                <li>技术成长平台，定期分享与讨论</li>
                <li>高效团队氛围，协作与成长并重</li>
            </ul>
        </div>
        <div style="margin-top:24px;">
            <h3 style="color:#fff;font-weight:bold;font-size:26px;">代表项目</h3>
            <ul style="color:rgba(255,255,255,0.85);font-size:18px;">
                <li>大学 GPT 服务平台</li>
                <li>ITSO 学生助理排班打卡系统</li>
                <li>校园网络监测工具</li>
            </ul>
        </div>
    </div>
    <div style="width:100%;max-width:900px;background:rgba(255,255,255,0.08);border-radius:16px;padding:32px 24px;margin-bottom:32px;">
        <div style="margin-top:24px;">
            <h3 style="color:#fff;font-weight:bold;">主要工作职责</h3>
            <ul style="color:rgba(255,255,255,0.85);font-size:16px;">
                <li>开发与运维大学 GPT 服务主服务、微服务及配套支持服务</li>
                <li>维护团队过往项目</li>
            </ul>
        </div>
        <div style="margin-top:24px;">
            <h3 style="color:#fff;font-weight:bold;">招聘岗位</h3>
            <div style="margin-bottom:16px;">
                <div class="property-badge">
                    <div class="property-badge-item">A. 集群运维</div>
                    <div class="property-badge-item">B. 后端开发</div>
                    <div class="property-badge-item">C. 前端开发</div>
                    <div class="property-badge-item">D. 全栈开发</div>
                </div>
            </div>
            <div style="color:rgba(255,255,255,0.85);font-size:16px;">
                <details style="margin-bottom:12px;">
                    <summary style="font-weight:bold;color:var(--text-color);">A. 集群运维</summary>
                    <ul>
                        <li>负责 Kubernetes 集群运维、资源分配、CI/CD 流程等</li>
                        <li>优选：有容器部署与维护、云原生架构设计经历，有团队开发经验</li>
                    </ul>
                </details>
                <details style="margin-bottom:12px;">
                    <summary style="font-weight:bold;color:var(--text-color);">B. 后端开发</summary>
                    <ul>
                        <li>负责 GPT 服务新功能研发、代码优化、故障诊断</li>
                        <li>优选：熟悉 Python/Go/Java，数据库、算法，有团队开发经验</li>
                    </ul>
                </details>
                <details style="margin-bottom:12px;">
                    <summary style="font-weight:bold;color:var(--text-color);">C. 前端开发</summary>
                    <ul>
                        <li>负责 GPT 服务前端研发与界面设计优化</li>
                        <li>优选：有 Vue/React 项目经验，了解前后端通信原理</li>
                    </ul>
                </details>
                <details>
                    <summary style="font-weight:bold;color:var(--text-color);">D. 全栈开发</summary>
                    <ul>
                        <li>统筹设计前后端架构，编写与审核项目代码</li>
                        <li>优选：熟悉 Python、JS/TS、Django、React、有团队开发经验</li>
                    </ul>
                </details>
            </div>
        </div>
        <div style="margin-top:24px;text-align:center;">
            <span style="color:#fff;font-size:20px;font-weight:bold;">欢迎有热情、有想法的你加入我们！</span>
        </div>
    </div>
    <div style="width:100%;max-width:900px;background:rgba(255,255,255,0.08);border-radius:16px;padding:32px 24px;margin-bottom:32px;">
        <h2 style="color:#fff;text-align:center;margin-bottom:16px;font-weight:bold;">薪酬待遇</h2>
        <p style="color:rgba(255,255,255,0.85);font-size:18px;text-align:center;">
            按照学生助理薪酬标准，25元/工时，每月上报工时不超过40小时（超过800元部分需缴税20%，次年初可申请退税并全部退还）。
        </p>
    </div>
    <div style="width:100%;max-width:900px;background:rgba(255,255,255,0.08);border-radius:16px;padding:32px 24px;">
        <h2 style="color:#fff;text-align:center;margin-bottom:16px;font-weight:bold;">联系方式</h2>
        <ul style="color:rgba(255,255,255,0.85);font-size:18px;text-align:center;list-style:none;padding:0;">
            <li>邮箱：gpt@cuhk.edu.cn</li>
            <li>微信公众号：香港中文大学深圳ITSO</li>
            <li>校园办公地点：TD（医学院）一楼 ITSO服务台</li>
        </ul>
    </div>