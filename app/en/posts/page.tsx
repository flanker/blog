import { getPublishedPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Posts - Feng Zhichao's Website",
};

export default async function EnPostsPage() {
  const posts = getPublishedPosts();

  const postsByYear = posts.reduce((acc, post) => {
    let year = "Unknown";
    if (post.date) {
      try {
        const dateObj = new Date(post.date);
        if (!isNaN(dateObj.getTime())) {
          year = dateObj.getFullYear().toString();
        }
      } catch (e) {
        // Keep as Unknown
      }
    }
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <section className="all-posts">
      <h1>All Posts</h1>
      {Object.keys(postsByYear)
        .sort((a, b) => b.localeCompare(a))
        .map((year) => (
          <div key={year}>
            <h3>{year}</h3>
            <ul className="post-list">
              {postsByYear[year]
                .slice()
                .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
                .map((post) => (
                  <li key={post.slug}>
                    <Link href={`/en/posts/${post.slug}`}>{post.title}</Link>
                    {post.date && <span className="post-date"> - {post.date}</span>}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
}
