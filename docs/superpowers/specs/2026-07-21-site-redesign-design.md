# 个人网站重设计：Builder / Writer / About

日期：2026-07-21　状态：已确认

## 目标

把网站从「博客 + 附带项目列表」重构为「作品集 + 写作 + 名片」三页结构，视觉全面重做。

## 信息架构

| 页面 | URL | 内容 |
|---|---|---|
| Builder | `/` | 顶部简介 + 全部项目平铺卡片，精选置顶，类型标签（开源/App/网站/插件） |
| Writer | `/posts` | 紧凑列表，按年份分组，标题 + 日期 |
| About | `/about` | 个人简介 + 「找到我」卡片：GitHub、B站、公众号（内嵌二维码） |

- 文章详情页 `/posts/[slug]` URL 不变。
- 旧 `/projects` 和 `/wx-account` 保留为静态跳转页（meta refresh + 链接），分别指向 `/` 和 `/about`。
- 导航简化为 Builder · Writer · About + 语言切换；GitHub/B站入口收进 About 页。
- 英文站同构：`/en`、`/en/posts`、`/en/about`，视觉一致。

## 视觉方向（经浏览器 mockup 确认）

- 「暖调作品集」：暖米色底 `#faf6f0`、白色圆角卡片、柔和阴影、大号粗标题、彩色胶囊标签。
- Writer 页选紧凑列表（非摘要卡片）。
- 文章详情页：暖底窄栏正文排版。
- 纯 CSS + CSS 变量，不引入框架；重写 `styles/`。

## 数据调整

- `Project` 增加 `type: 'oss' | 'app' | 'web' | 'extension'`，驱动标签文案与配色。
- About 简介基于现有 about.md 扩写（20+ 年经验、极智嘉/小红书、产品技术方向）。
- Email / X 暂不放（无现成资料）。

## 验证

- `pnpm build` 通过，所有旧文章路由存在。
- 本地 dev server 浏览器逐页 QA：三个主页面、文章详情、两个跳转页、英文站。
