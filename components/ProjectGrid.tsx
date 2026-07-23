import { projects, projectTypeLabels } from "@/lib/projects";

interface ProjectGridProps {
  lang: "zh" | "en";
}

export default function ProjectGrid({ lang }: ProjectGridProps) {
  const isEnglish = lang === "en";
  const sorted = [...projects].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  return (
    <ul className="project-grid">
      {sorted.map((p) => (
        <li key={p.url}>
          <a className="project-card" href={p.url} target="_blank" rel="noopener noreferrer">
            <div className="project-title">{isEnglish ? p.titleEn : p.title}</div>
            <div className="project-desc">{isEnglish ? p.descEn : p.desc}</div>
            <span className={`tag tag-${p.type}`}>{projectTypeLabels[p.type][lang]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
