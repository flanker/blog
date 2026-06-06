import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div>
      <section className="intro">
        <p>关于 Tech Lead、工程实践与产品研发的随笔。</p>
      </section>

      <section className="projects" id="projects">
        <h2>精选项目</h2>
        <ul>
          {featuredProjects.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
              </a>
            </li>
          ))}
        </ul>
        <Link href={`/projects`}>所有项目</Link>
      </section>

      <section className="recent-posts">
        <h2>精选文章</h2>
        <ul className="post-list">
          <li key="start_with_problem">
            <Link href={`/posts/2025-06-29-start_with_problem/`}>目标之前，先想清楚问题是什么</Link>
          </li>
          <li key="xy_problem">
            <Link href={`/posts/2022-02-26_xy_problem/`}>XY 问题</Link>
          </li>
          <li key="how-to-build-a-bike-shed">
            <Link href={`/posts/2022-08-15-how-to-build-a-bike-shed/`}>如何修建一个自行车棚</Link>
          </li>
        </ul>
        <Link href={`/posts`}>所有文章</Link>
      </section>
    </div>
  );
}
