import ProjectGrid from "@/components/ProjectGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  lang: "en",
  title: "Feng Zhichao's Website - Tech Leadership, Engineering & Product",
  description:
    "Feng Zhichao builds products and writes. Small apps and tools (iOS apps, Chrome extensions, open source), plus essays on tech leadership, engineering practice, and product thinking.",
  path: "/en/",
  languages: { zh: "/", en: "/en/" },
});

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
