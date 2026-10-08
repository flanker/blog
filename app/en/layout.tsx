import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteDocument from "@/components/SiteDocument";
import { defaultOgImage, siteNames, siteUrl } from "@/lib/seo";

const siteDescription =
  "Feng Zhichao's notes on tech leadership, engineering practice, and product development.";

// Fallback for pages without their own metadata. Indexable pages override this with pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteNames.en,
  description: siteDescription,
  openGraph: {
    title: siteNames.en,
    description: siteDescription,
    siteName: siteNames.en,
    locale: "en_US",
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteNames.en }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteNames.en,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument lang="en">
      <div className="container">
        <Header lang="en" />
        <main className="site-content">{children}</main>
        <Footer lang="en" />
      </div>
    </SiteDocument>
  );
}
