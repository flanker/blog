import Link from "next/link";

const projects = [
  {
    title: "Smithfile",
    desc: "让 AI 编程助手拥有持久记忆与身份",
    url: "https://github.com/flanker/smithfile",
  },
  {
    title: "吃青蛙",
    desc: "个人目标管理 App",
    url: "https://chiqingwa.com/",
  },
  {
    title: "记大账",
    desc: "不记流水，只记真正的大账",
    url: "https://apps.apple.com/cn/app/%E8%AE%B0%E5%A4%A7%E8%B4%A6/id6757328681",
  },
  {
    title: "Framely",
    desc: "Chrome 页面截图插件",
    url: "https://framelyapp.com/",
  },
  {
    title: "DarkBili",
    desc: "B站深色模式插件",
    url: "https://darkbili.com/",
  },
  {
    title: "Pianooo",
    desc: "免费古典钢琴音乐欣赏",
    url: "https://pianooo.cn/",
  },
  {
    title: "方块记忆王",
    desc: "简洁休闲益智 iOS 小游戏",
    url: "https://apps.apple.com/cn/app/%E6%96%B9%E5%9D%97%E8%AE%B0%E5%BF%86%E7%8E%8B/id6755654091",
  },
  {
    title: "EmojiZen",
    desc: "emoji 搜索工具",
    url: "https://emojizen.com/",
  },
  {
    title: "AheadCal",
    desc: "简洁日历工具",
    url: "https://aheadcal.com/",
  },
  {
    title: "Chromadb-Admin",
    desc: "Chromdb 向量数据库管理器",
    url: "https://chromadb-admin.com/",
  },
  {
    title: "Linear Method 中文版",
    desc: "产品研发的最佳实践",
    url: "https://linear-method.cn/",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="intro">
        <p>关于 Tech Lead、工程实践与产品研发的随笔。</p>
      </section>

      <section className="projects" id="projects">
        <h2>个人项目</h2>
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
