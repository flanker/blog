import { getPublishedPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "写作 - 冯智超的个人网站",
};

export default async function PostsPage() {
  const posts = getPublishedPosts();

  const postsByYear = posts.reduce((acc, post) => {
    let year = "Unknown";
    if (post.date) {
      const dateObj = new Date(post.date);
      if (!isNaN(dateObj.getTime())) {
        year = dateObj.getFullYear().toString();
      }
    }
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <section className="all-posts">
      <div className="hero">
        <h1>写作</h1>
        <p>随手记录一些想法</p>
      </div>
      {Object.keys(postsByYear)
        .sort((a, b) => b.localeCompare(a))
        .map((year) => (
          <div className="year-group" key={year}>
            <h3>{year}</h3>
            <ul className="post-list">
              {postsByYear[year]
                .slice()
                .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
                .map((post) => (
                  <li key={post.slug}>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    {post.date && <span className="post-date">{post.date}</span>}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
}
