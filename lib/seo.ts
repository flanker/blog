import type { Metadata } from "next";

export const siteUrl = "https://fengzhichao.me";
export const defaultOgImage = "/images/og-default.png";

export const siteNames = {
  zh: "冯智超的个人网站",
  en: "Feng Zhichao's Website",
} as const;

interface PageMetadataOptions {
  lang: "zh" | "en";
  title: string;
  description: string;
  // Absolute path with trailing slash, e.g. "/posts/"
  path: string;
  ogTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
  // Paths of the same page in each language, for hreflang alternates
  languages?: { zh: string; en: string };
}

// Next.js replaces (not merges) openGraph/twitter/alternates from parent layouts,
// so every page needs the full set to keep og:image, og:url and canonical correct.
export function pageMetadata({
  lang,
  title,
  description,
  path,
  ogTitle = title,
  type = "website",
  publishedTime,
  languages,
}: PageMetadataOptions): Metadata {
  const common = {
    title: ogTitle,
    description,
    url: path,
    siteName: siteNames[lang],
    locale: lang === "zh" ? "zh_CN" : "en_US",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteNames[lang] }],
  };

  return {
    title,
    description,
    openGraph:
      type === "article"
        ? { ...common, type: "article", publishedTime: publishedTime || undefined }
        : { ...common, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [defaultOgImage],
    },
    alternates: {
      canonical: path,
      languages: languages && { "zh-CN": languages.zh, en: languages.en, "x-default": languages.zh },
      types: {
        "application/rss+xml": "/feed.xml",
      },
    },
  };
}
