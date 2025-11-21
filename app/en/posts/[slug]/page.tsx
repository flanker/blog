import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Feng Zhichao's Website`,
    description: post.content.substring(0, 160),
  };
}

export default async function EnPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="post">
      <header className="post-header">
        <h1>{post.title}</h1>
        {post.date && <time className="post-date">{post.date}</time>}
        {post.category === "draft" && <span className="draft-badge">Draft</span>}
      </header>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
    </article>
  );
}
