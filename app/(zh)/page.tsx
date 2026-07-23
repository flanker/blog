import ProjectGrid from "@/components/ProjectGrid";

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
