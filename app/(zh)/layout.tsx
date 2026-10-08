import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteDocument from "@/components/SiteDocument";
import { defaultOgImage, siteNames, siteUrl } from "@/lib/seo";

const siteDescription =
  "冯智超的个人网站，记录关于 Tech Lead、工程实践与产品研发的思考与随笔。";

// Fallback for pages without their own metadata. Indexable pages override this with pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteNames.zh,
  description: siteDescription,
  openGraph: {
    title: siteNames.zh,
    description: siteDescription,
    siteName: siteNames.zh,
    locale: "zh_CN",
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteNames.zh }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteNames.zh,
    description: siteDescription,
    images: [defaultOgImage],
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

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument lang="zh">
      <div className="container">
        <Header lang="zh" />
        <main className="site-content">{children}</main>
        <Footer lang="zh" />
      </div>
    </SiteDocument>
  );
}
