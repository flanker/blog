import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export default function EnHomePage() {
  return (
    <div>
      <section className="intro">
        <p>Notes on tech leadership, engineering practice, and product development.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Personal Projects</h2>
        <ul>
          {featuredProjects.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="project-title">{p.titleEn}</div>
                <div className="project-desc">{p.descEn}</div>
              </a>
            </li>
          ))}
        </ul>
        <Link href={`/en/projects`}>All Projects</Link>
      </section>

      <section className="recent-posts">
        <h2>Featured Posts</h2>
        <ul className="post-list">
          <li key="start_with_problem">
            <Link href={`/en/posts/2025-06-29-start_with_problem/`}>Think About the Problem Before Setting Goals</Link>
          </li>
          <li key="xy_problem">
            <Link href={`/en/posts/2022-02-26_xy_problem/`}>The XY Problem</Link>
          </li>
          <li key="how-to-build-a-bike-shed">
            <Link href={`/en/posts/2022-08-15-how-to-build-a-bike-shed/`}>How to Build a Bike Shed</Link>
          </li>
        </ul>
        <Link href={`/en/posts`}>All Posts</Link>
      </section>
    </div>
  );
}
