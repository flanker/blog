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
            <a href="https://darkbili.com/" target="_blank">
              DarkBili - B站深色模式插件
            </a>
          </li>
          <li>
            <a href="https://chromadb-admin.com/" target="_blank">
              Chromadb-Admin - Chromdb 向量数据库管理器
            </a>
          </li>
          <li>
            <a href="https://llmprice.cn/" target="_blank">
              大模型价格对比
            </a>
          </li>
          <li>
            <a href="https://aheadcal.com/" target="_blank">
              AheadCal - 简洁日历工具
            </a>
          </li>
          <li>
            <a href="https://linear-method.cn/" target="_blank">
              Linear Method 中文版 - 产品研发的最佳实践
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
