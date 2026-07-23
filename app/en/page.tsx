import ProjectGrid from "@/components/ProjectGrid";

export default function EnHomePage() {
  return (
    <div>
      <section className="hero">
        <h1>I build products. I write.</h1>
        <p>Trying to build some small things</p>
      </section>

      <section className="projects" id="projects">
        <ProjectGrid lang="en" />
      </section>
    </div>
  );
}
