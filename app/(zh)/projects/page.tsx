import { projects } from "@/lib/projects";

export const metadata = {
  title: "项目 - 冯智超的个人网站",
  description: "冯智超的个人项目作品集",
};

export default function ProjectsPage() {
  return (
    <section className="projects">
      <h1>全部项目</h1>
      <p className="page-intro">
        过去几年我利用业余时间做的一些小项目，多数是自己日常想用却没找到合适工具时的产物。
      </p>
      <ul>
        {projects.map((p) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
