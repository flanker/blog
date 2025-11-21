import Link from "next/link";

export default function EnHomePage() {
  return (
    <div>
      <section className="intro">
        <p>
          This is Feng Zhichao's personal website, a blog about Tech Lead, technology, and product development.
          Topics include development technologies, engineering practices, self-management, team management, and project management.
        </p>
      </section>

      <section className="projects">
        <h2>Personal Projects</h2>
        <ul>
          <li>
            <a href="https://chiqingwa.com/" target="_blank">
              <div className="project-title">Eat The Frog</div>
              <div className="project-desc">Personal Goal Management App</div>
            </a>
          </li>
          <li>
            <a href="https://aheadcal.com/" target="_blank">
              <div className="project-title">AheadCal</div>
              <div className="project-desc">Minimalist Calendar Tool</div>
            </a>
          </li>
          <li>
            <a href="https://darkbili.com/" target="_blank">
              <div className="project-title">DarkBili</div>
              <div className="project-desc">Dark Mode Extension for Bilibili</div>
            </a>
          </li>
          <li>
            <a href="https://chromadb-admin.com/" target="_blank">
              <div className="project-title">Chromadb-Admin</div>
              <div className="project-desc">Vector Database Manager for Chromadb</div>
            </a>
          </li>
          <li>
            <a href="https://emojizen.com/" target="_blank">
              <div className="project-title">EmojiZen</div>
              <div className="project-desc">Emoji Search Tool</div>
            </a>
          </li>
          <li>
            <a href="https://framelyapp.com/" target="_blank">
              <div className="project-title">Framely</div>
              <div className="project-desc">Chrome Screenshot Extension</div>
            </a>
          </li>
          <li>
            <a href="https://linear-method.cn/" target="_blank">
              <div className="project-title">Linear Method (Chinese)</div>
              <div className="project-desc">Best Practices for Product Development</div>
            </a>
          </li>
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
