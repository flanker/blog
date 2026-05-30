export const metadata = {
  title: "项目 - 冯智超的个人网站",
  description: "冯智超的个人项目作品集",
};

const projects = [
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
  {
    title: "Smithfile",
    desc: "让 AI 编程助手拥有持久记忆与身份",
    url: "https://github.com/flanker/smithfile",
  },
];

export default function ProjectsPage() {
  return (
    <section className="projects">
      <h1>项目</h1>
      <p className="projects-intro">
        过去几年我利用业余时间做的一些小项目，多数是自己日常想用却没找到合适工具时的产物。
      </p>
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
  );
}
