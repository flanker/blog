import { getPostBySlug, getAllPosts, stripMarkdown } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const description = stripMarkdown(post.content).substring(0, 160);
  const title = `${post.title} - 冯智超的个人网站`;
  const url = `/posts/${slug}/`;

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date || undefined,
      url,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date || undefined,
    description: stripMarkdown(post.content).substring(0, 160),
    author: {
      "@type": "Person",
      name: "冯智超",
      url: "https://fengzhichao.me",
    },
    url: `https://fengzhichao.me/posts/${post.slug}/`,
  };

  return (
    <article className="post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="post-header">
        <h1>{post.title}</h1>
        {post.date && <time className="post-date">{post.date}</time>}
        {post.category === "draft" && <span className="draft-badge">草稿</span>}
      </header>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
    </article>
  );
}
