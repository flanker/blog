import { getAdjacentPosts, getPostBySlug, getPublishedPosts, postRedirects, stripMarkdown } from "@/lib/posts";
import PostNav from "@/components/PostNav";
import RedirectStub from "@/components/RedirectStub";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return [...posts.map((post) => post.slug), ...Object.keys(postRedirects)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (postRedirects[slug]) {
    return { title: "文章已移动 - 冯智超的个人网站", robots: { index: false } };
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const description = stripMarkdown(post.content).substring(0, 160);

  return pageMetadata({
    lang: "zh",
    title: `${post.title} - 冯智超的个人网站`,
    ogTitle: post.title,
    description,
    path: `/posts/${slug}/`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  if (postRedirects[slug]) {
    return <RedirectStub to={postRedirects[slug]} message="这篇文章已移动。" linkText="前往新地址 →" />;
  }

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
      </header>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
      <PostNav lang="zh" {...getAdjacentPosts(getPublishedPosts(), post.slug)} />
    </article>
  );
}
