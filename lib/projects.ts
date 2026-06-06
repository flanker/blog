export interface Project {
  title: string;
  desc: string;
  url: string;
  /** 标题英文版 */
  titleEn: string;
  /** 描述英文版 */
  descEn: string;
  /** 是否在首页精选展示 */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Smithfile",
    desc: "让 AI 编程助手拥有持久记忆与身份",
    titleEn: "Smithfile",
    descEn: "Persistent Memory and Identity for AI Coding Agents",
    url: "https://github.com/flanker/smithfile",
    featured: true,
  },
  {
    title: "吃青蛙",
    desc: "个人目标管理 App",
    titleEn: "Eat The Frog",
    descEn: "Personal Goal Management App",
    url: "https://chiqingwa.com/",
    featured: true,
  },
  {
    title: "HN Weekly 中文",
    desc: "Hacker Newsletter 每周中文翻译",
    titleEn: "HN Weekly Chinese",
    descEn: "Weekly Chinese Translation of Hacker Newsletter",
    url: "https://hnweekly.cn/",
    featured: true,
  },
  {
    title: "别废话",
    desc: "一个职场反废话宣言",
    titleEn: "Biefeihua",
    descEn: "A No-Bullshit Manifesto for the Workplace",
    url: "https://biefeihua.cn/",
    featured: true,
  },
  {
    title: "西窗",
    desc: "极简、重美感的中文古诗词站",
    titleEn: "Xichuang",
    descEn: "A Minimalist, Beautiful Site for Classical Chinese Poetry",
    url: "https://xichuang.ink/",
    featured: true,
  },
  {
    title: "LLM 价格对比",
    desc: "实时对比主流大模型 API 价格",
    titleEn: "LLM Price",
    descEn: "Real-time API Price Comparison for Major LLMs",
    url: "https://llmprice.cn/",
  },
  {
    title: "记大账",
    desc: "不记流水，只记真正的大账",
    titleEn: "Big Ledger",
    descEn: "Track only the big stuff, not every transaction",
    url: "https://apps.apple.com/cn/app/%E8%AE%B0%E5%A4%A7%E8%B4%A6/id6757328681",
  },
  {
    title: "Framely",
    desc: "Chrome 页面截图插件",
    titleEn: "Framely",
    descEn: "Chrome Screenshot Extension",
    url: "https://framelyapp.com/",
  },
  {
    title: "DarkBili",
    desc: "B站深色模式插件",
    titleEn: "DarkBili",
    descEn: "Dark Mode Extension for Bilibili",
    url: "https://darkbili.com/",
  },
  {
    title: "Pianooo",
    desc: "免费古典钢琴音乐欣赏",
    titleEn: "Pianooo",
    descEn: "Free Classical Piano Music",
    url: "https://pianooo.cn/",
  },
  {
    title: "方块记忆王",
    desc: "简洁休闲益智 iOS 小游戏",
    titleEn: "Memory Master",
    descEn: "Minimalist Casual Puzzle iOS Game",
    url: "https://apps.apple.com/cn/app/%E6%96%B9%E5%9D%97%E8%AE%B0%E5%BF%86%E7%8E%8B/id6755654091",
  },
  {
    title: "EmojiZen",
    desc: "emoji 搜索工具",
    titleEn: "EmojiZen",
    descEn: "Emoji Search Tool",
    url: "https://emojizen.com/",
  },
  {
    title: "AheadCal",
    desc: "简洁日历工具",
    titleEn: "AheadCal",
    descEn: "Minimalist Calendar Tool",
    url: "https://aheadcal.com/",
  },
  {
    title: "Chromadb-Admin",
    desc: "Chromdb 向量数据库管理器",
    titleEn: "Chromadb-Admin",
    descEn: "Vector Database Manager for Chromadb",
    url: "https://chromadb-admin.com/",
  },
  {
    title: "Linear Method 中文版",
    desc: "产品研发的最佳实践",
    titleEn: "Linear Method (Chinese)",
    descEn: "Best Practices for Product Development",
    url: "https://linear-method.cn/",
  },
];

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
