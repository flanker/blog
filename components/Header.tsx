interface HeaderProps {
  lang: 'zh' | 'en';
}

export default function Header({ lang }: HeaderProps) {
  const isEnglish = lang === 'en';
  const base = isEnglish ? '/en' : '';

  return (
    <header className="site-header">
      <div className="site-title">
        <a href={isEnglish ? "/en" : "/"}>
          <span className="site-title-mark">
            {isEnglish ? "Feng Zhichao" : "冯智超"}
          </span>
        </a>
      </div>
      <nav className="site-nav">
        <a href={`${base}/`}>Home</a>
        <a href={`${base}/posts`}>Posts</a>
        <a href={`${base}/about`}>About</a>
        <a href={isEnglish ? "/" : "/en"} className="lang-switch">
          {isEnglish ? "中文" : "EN"}
        </a>
      </nav>
    </header>
  );
}
