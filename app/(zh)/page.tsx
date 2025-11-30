import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="intro">
        <p>
          这里是冯智超的个人网站，这个博客记录了有关Tech Lead、技术、产品开发的内容。
          内容涵盖开发技术、工程实践、自我管理、团队管理、项目管理等几个方向。
        </p>
      </section>

      <section className="projects">
        <h2>个人项目</h2>
        <ul>
          <li>
            <a href="https://apps.apple.com/us/app/memory-blocks-master/id6755654091" target="_blank">
              <div className="project-title">四色方块记忆大师</div>
              <div className="project-desc">简洁休闲益智 iOS 小游戏</div>
            </a>
          </li>
          <li>
            <a href="https://chiqingwa.com/" target="_blank">
              <div className="project-title">吃青蛙</div>
              <div className="project-desc">个人目标管理 App</div>
            </a>
          </li>
          <li>
            <a href="https://aheadcal.com/" target="_blank">
              <div className="project-title">AheadCal</div>
              <div className="project-desc">简洁日历工具</div>
            </a>
          </li>
          <li>
            <a href="https://darkbili.com/" target="_blank">
              <div className="project-title">DarkBili</div>
              <div className="project-desc">B站深色模式插件</div>
            </a>
          </li>
          <li>
            <a href="https://chromadb-admin.com/" target="_blank">
              <div className="project-title">Chromadb-Admin</div>
              <div className="project-desc">Chromdb 向量数据库管理器</div>
            </a>
          </li>
          <li>
            <a href="https://emojizen.com/" target="_blank">
              <div className="project-title">EmojiZen</div>
              <div className="project-desc">emoji 搜索工具</div>
            </a>
          </li>
          <li>
            <a href="https://framelyapp.com/" target="_blank">
              <div className="project-title">Framely</div>
              <div className="project-desc">Chrome 页面截图插件</div>
            </a>
          </li>
          <li>
            <a href="https://linear-method.cn/" target="_blank">
              <div className="project-title">Linear Method 中文版</div>
              <div className="project-desc">产品研发的最佳实践</div>
            </a>
          </li>
        </ul>
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
