import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects - Feng Zhichao's Website",
  description: "Personal side projects by Feng Zhichao",
};

export default function EnProjectsPage() {
  return (
    <section className="projects">
      <h1>All Projects</h1>
      <p className="page-intro">
        A handful of small things I built in my spare time over the past few years — mostly because I wanted to use them
        myself and couldn't find what I needed elsewhere.
      </p>
      <ul>
        {projects.map((p) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="project-title">{p.titleEn}</div>
              <div className="project-desc">{p.descEn}</div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
