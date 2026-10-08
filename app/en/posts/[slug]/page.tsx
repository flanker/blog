import { getAdjacentPosts, getPostBySlug, getPostsByCategory, getPublishedPosts, stripMarkdown } from "@/lib/posts";
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
  // Chinese posts used to be duplicated under /en/posts/; keep those URLs as redirect stubs.
  const posts = [...getPostsByCategory("en"), ...getPublishedPosts()];
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

  if (post.category !== "en") {
    return {
      title: `${post.title} - Feng Zhichao's Website`,
      robots: { index: false },
    };
  }

  const description = stripMarkdown(post.content).substring(0, 160);

  return pageMetadata({
    lang: "en",
    title: `${post.title} - Feng Zhichao's Website`,
    ogTitle: post.title,
    description,
    path: `/en/posts/${slug}/`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function EnPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  if (post.category !== "en") {
    return (
      <RedirectStub
        to={`/posts/${post.slug}/`}
        message="This post is only available in Chinese."
        linkText="Read it in Chinese →"
      />
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date || undefined,
    description: stripMarkdown(post.content).substring(0, 160),
    author: {
      "@type": "Person",
      name: "Feng Zhichao",
      url: "https://fengzhichao.me",
    },
    url: `https://fengzhichao.me/en/posts/${post.slug}/`,
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
      <PostNav lang="en" {...getAdjacentPosts(getPostsByCategory("en"), post.slug)} />
    </article>
  );
}
