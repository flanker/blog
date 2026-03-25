import type { Metadata } from "next";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const siteUrl = "https://fengzhichao.me";
const siteDescription =
  "这里是冯智超的个人网站，这个博客记录了有关Tech Lead、技术、产品开发的内容。内容涵盖开发技术、工程实践、自我管理、团队管理、项目管理等几个方向";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "冯智超的个人网站",
  description: siteDescription,
  openGraph: {
    title: "冯智超的个人网站",
    description: siteDescription,
    url: siteUrl,
    siteName: "冯智超的个人网站",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "冯智超的个人网站",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "冯智超的个人网站",
  url: siteUrl,
  description: siteDescription,
  author: {
    "@type": "Person",
    name: "冯智超",
    url: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <GoogleAnalytics gaId="G-02RKJ0RYRX" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
