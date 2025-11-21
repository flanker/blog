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
        {children}
      </body>
    </html>
  );
}
