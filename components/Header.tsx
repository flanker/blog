interface HeaderProps {
  lang: 'zh' | 'en';
}

export default function Header({ lang }: HeaderProps) {
  const isEnglish = lang === 'en';

  return (
    <header className="site-header">
      <div className="site-title">
        <a href={isEnglish ? "/en" : "/"}>
          <span className="site-title-mark">
            {isEnglish ? "Feng Zhichao" : "冯智超"}
          </span>
          <span className="site-title-sub">
            {isEnglish ? "Notes · Tech · Craft" : "随笔 · 技艺 · 思考"}
          </span>
        </a>
      </div>
      <nav className="site-nav">
        {isEnglish ? (
          <>
            <a href="/en">Home</a>
            <a href="/en/posts">Writing</a>
            <a href="/en/projects">Projects</a>
            <a href="/en/about">About</a>
            <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://space.bilibili.com/266165600" target="_blank" rel="noopener noreferrer">
              Bilibili
            </a>
            <a href="/" className="lang-switch">中文</a>
          </>
        ) : (
          <>
            <a href="/">首页</a>
            <a href="/posts">文章</a>
            <a href="/projects">项目</a>
            <a href="/wx-account">公众号</a>
            <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://space.bilibili.com/266165600" target="_blank" rel="noopener noreferrer">
              B站
            </a>
            <a href="/en" className="lang-switch">English</a>
          </>
        )}
      </nav>
    </header>
  );
}
