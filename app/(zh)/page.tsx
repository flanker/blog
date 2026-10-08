import ProjectGrid from "@/components/ProjectGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  lang: "zh",
  title: "冯智超的个人网站 - Tech Lead、工程实践与产品研发",
  description:
    "冯智超的个人网站：做产品，也写作。这里有我做的一些小产品和工具（iOS 应用、Chrome 扩展、开源项目），以及关于 Tech Lead、技术管理、工程实践与产品思考的文章。",
  path: "/",
  languages: { zh: "/", en: "/en/" },
});

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>做产品，也写作。</h1>
        <p>尝试做一些小东西</p>
      </section>

      <section className="projects" id="projects">
        <ProjectGrid lang="zh" />
      </section>
    </div>
  );
}
