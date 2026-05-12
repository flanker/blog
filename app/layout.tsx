import type { Metadata } from "next";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const siteUrl = "https://fengzhichao.me";
const siteDescription =
  "冯智超的个人网站，记录关于 Tech Lead、工程实践与产品研发的思考与随笔。";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Noto+Serif+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <GoogleAnalytics gaId="G-02RKJ0RYRX" />
      <body>
        <div className="paper-grain" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
