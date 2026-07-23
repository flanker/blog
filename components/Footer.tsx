interface FooterProps {
  lang: 'zh' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const isEnglish = lang === 'en';

  return (
    <footer className="site-footer">
      <span className="seal" aria-hidden="true">智</span>
      <p>
        © {new Date().getFullYear()}{" "}
        {isEnglish ? "Feng Zhichao's Personal Website" : "冯智超的个人网站"}
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
