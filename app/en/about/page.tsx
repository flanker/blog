import { getPageBySlug } from "@/lib/pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "About - Feng Zhichao's Website",
};

export default async function EnAboutPage() {
  const page = await getPageBySlug("about-en");

  if (!page) {
    notFound();
  }

  return (
    <article className="page">
      <div className="page-content" dangerouslySetInnerHTML={{ __html: page.contentHtml || "" }} />
    </article>
  );
}
