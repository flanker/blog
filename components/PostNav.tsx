import type { PostData } from "@/lib/posts";
import { postUrl } from "@/lib/posts";

interface PostNavProps {
  lang: "zh" | "en";
  older?: PostData;
  newer?: PostData;
}

const labels = {
  zh: { older: "← 上一篇", newer: "下一篇 →", nav: "文章导航" },
  en: { older: "← Previous", newer: "Next →", nav: "Post navigation" },
};

export default function PostNav({ lang, older, newer }: PostNavProps) {
  if (!older && !newer) return null;

  return (
    <nav className="post-nav" aria-label={labels[lang].nav}>
      {older && (
        <a href={postUrl(older)} className="post-nav-prev">
          <span className="post-nav-label">{labels[lang].older}</span>
          <span className="post-nav-title">{older.title}</span>
        </a>
      )}
      {newer && (
        <a href={postUrl(newer)} className="post-nav-next">
          <span className="post-nav-label">{labels[lang].newer}</span>
          <span className="post-nav-title">{newer.title}</span>
        </a>
      )}
    </nav>
  );
}
