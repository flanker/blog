import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - 冯智超的个人网站`,
    description: post.content.substring(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="post">
      <header className="post-header">
        <h1>{post.title}</h1>
        {post.date && <time className="post-date">{post.date}</time>}
        {post.category === "draft" && <span className="draft-badge">草稿</span>}
      </header>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
    </article>
  );
}
