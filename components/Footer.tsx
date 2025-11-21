interface FooterProps {
  lang: 'zh' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const isEnglish = lang === 'en';

  return (
    <footer className="site-footer">
      <p>
        © 2025 {isEnglish ? "Feng Zhichao" : "冯智超"}. All rights reserved.
      </p>
      <p>
        <a href="https://github.com/flanker/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
