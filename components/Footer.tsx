interface FooterProps {
  lang: 'zh' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const isEnglish = lang === 'en';

  return (
    <footer className="site-footer">
      <span className="seal" aria-hidden="true">智</span>
      <p>
        © {new Date().getFullYear()} {isEnglish ? "Feng Zhichao" : "冯智超"} ·{" "}
        {isEnglish ? "Made with care" : "用心写作"}
      </p>
      <p>
        <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" · "}
        <a href="/feed.xml">RSS</a>
      </p>
    </footer>
  );
}
