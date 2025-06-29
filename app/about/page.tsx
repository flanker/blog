import { getPageBySlug } from "@/lib/pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "关于 - 冯智超的个人网站",
};

export default async function AboutPage() {
  const page = await getPageBySlug("about");

  if (!page) {
    notFound();
  }

  return (
    <article className="page">
      <div className="page-content" dangerouslySetInnerHTML={{ __html: page.contentHtml || "" }} />
    </article>
  );
}
