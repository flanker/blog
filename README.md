# 冯智超的个人网站

这是冯智超的个人博客，使用 Next.js 构建的静态网站。

访问地址：[https://fengzhichao.me](https://fengzhichao.me)

## 技术栈

- Next.js (App Router)
- TypeScript
- Markdown (gray-matter + remark)
- GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态网站
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 内容结构

- `posts/` - 已发布的博客文章
- `draft/` - 草稿文章
- `en/` - 英文文章
- `public/images/` - 图片资源

## 部署

推送到 `master` 分支会自动触发 GitHub Actions 部署到 GitHub Pages。

## License

MIT
