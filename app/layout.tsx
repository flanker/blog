import type { Metadata } from "next";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "冯智超的个人网站",
  description:
    "这里是冯智超的个人网站，这个博客记录了有关Tech Lead、技术、产品开发的内容。内容涵盖开发技术、工程实践、自我管理、团队管理、项目管理等几个方向",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <GoogleAnalytics gaId="G-02RKJ0RYRX" />
      <body>
        <div className="container">
          <header className="site-header">
            <h1 className="site-title">
              <a href="/">冯智超的个人网站</a>
            </h1>
            <nav className="site-nav">
              <a href="/">首页</a>
              <a href="/posts">文章</a>
              <a href="/wx-account">公众号</a>
              <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href="https://space.bilibili.com/266165600" target="_blank" rel="noopener noreferrer">
                B站
              </a>
            </nav>
          </header>
          <main className="site-content">{children}</main>
          <footer className="site-footer">
            <p>© 2025 冯智超. All rights reserved.</p>
            <p>
              <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
