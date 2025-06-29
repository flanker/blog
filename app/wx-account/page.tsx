import { getPageBySlug } from "@/lib/pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "公众号 - 冯智超的个人网站",
};

export default async function WxAccountPage() {
  const page = await getPageBySlug("wx-account");

  if (!page) {
    notFound();
  }

  return (
    <article className="page">
      <div className="page-content" dangerouslySetInnerHTML={{ __html: page.contentHtml || "" }} />
    </article>
  );
}
