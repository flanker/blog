import { GoogleAnalytics } from "@next/third-parties/google";
import { sourceSerif } from "@/lib/fonts";
import { siteNames, siteUrl } from "@/lib/seo";
import "@/styles/globals.css";

interface SiteDocumentProps {
  lang: "zh" | "en";
  children: React.ReactNode;
}

const descriptions = {
  zh: "冯智超的个人网站，记录关于 Tech Lead、工程实践与产品研发的思考与随笔。",
  en: "Feng Zhichao's notes on tech leadership, engineering practice, and product development.",
};

// Shared <html>/<body> for the per-language root layouts, so each language gets the right lang attribute.
export default function SiteDocument({ lang, children }: SiteDocumentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteNames[lang],
    url: lang === "zh" ? `${siteUrl}/` : `${siteUrl}/en/`,
    description: descriptions[lang],
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    author: {
      "@type": "Person",
      name: lang === "zh" ? "冯智超" : "Feng Zhichao",
      url: siteUrl,
    },
  };

  return (
    <html lang={lang === "zh" ? "zh-CN" : "en"} className={sourceSerif.variable}>
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
