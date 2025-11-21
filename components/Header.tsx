interface HeaderProps {
  lang: 'zh' | 'en';
}

export default function Header({ lang }: HeaderProps) {
  const isEnglish = lang === 'en';

  return (
    <header className="site-header">
      <h1 className="site-title">
        <a href={isEnglish ? "/en" : "/"}>
          {isEnglish ? "Feng Zhichao's Website" : "冯智超的个人网站"}
        </a>
      </h1>
      <nav className="site-nav">
        {isEnglish ? (
          <>
            <a href="/en">Home</a>
            <a href="/en/posts">Posts</a>
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
