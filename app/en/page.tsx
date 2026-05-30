import Link from "next/link";

const projects = [
  {
    title: "Smithfile",
    desc: "Persistent Memory and Identity for AI Coding Agents",
    url: "https://github.com/flanker/smithfile",
  },
  {
    title: "Eat The Frog",
    desc: "Personal Goal Management App",
    url: "https://chiqingwa.com/",
  },
  {
    title: "Big Ledger",
    desc: "Track only the big stuff, not every transaction",
    url: "https://apps.apple.com/cn/app/%E8%AE%B0%E5%A4%A7%E8%B4%A6/id6757328681",
  },
  {
    title: "Framely",
    desc: "Chrome Screenshot Extension",
    url: "https://framelyapp.com/",
  },
  {
    title: "DarkBili",
    desc: "Dark Mode Extension for Bilibili",
    url: "https://darkbili.com/",
  },
  {
    title: "Memory Master",
    desc: "Minimalist Casual Puzzle iOS Game",
    url: "https://apps.apple.com/cn/app/%E6%96%B9%E5%9D%97%E8%AE%B0%E5%BF%86%E7%8E%8B/id6755654091",
  },
  {
    title: "EmojiZen",
    desc: "Emoji Search Tool",
    url: "https://emojizen.com/",
  },
  {
    title: "AheadCal",
    desc: "Minimalist Calendar Tool",
    url: "https://aheadcal.com/",
  },
  {
    title: "Chromadb-Admin",
    desc: "Vector Database Manager for Chromadb",
    url: "https://chromadb-admin.com/",
  },
  {
    title: "Linear Method (Chinese)",
    desc: "Best Practices for Product Development",
    url: "https://linear-method.cn/",
  },
];

export default function EnHomePage() {
  return (
    <div>
      <section className="intro">
        <p>Notes on tech leadership, engineering practice, and product development.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Personal Projects</h2>
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
