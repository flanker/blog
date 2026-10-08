import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { imageSize } from "image-size";

const postsDirectory = path.join(process.cwd(), "posts");
const draftsDirectory = path.join(process.cwd(), "draft");
const enDirectory = path.join(process.cwd(), "en");
const publicDirectory = path.join(process.cwd(), "public");

// Retired post slugs and where they moved; their URLs are kept as noindex redirect stubs.
export const postRedirects: Record<string, string> = {
  // Earlier draft of 2022-04-11-important-things, published by mistake
  "2022-04-06-team-document-platform": "/posts/2022-04-11-important-things/",
};

export interface PostData {
  id: string;
  date: string;
  title: string;
  content: string;
  contentHtml?: string;
  category?: "post" | "draft" | "en";
  slug: string;
  // Markdown file path relative to the repo root, e.g. "posts/2022/07-06-ask-with-context.md"
  sourcePath: string;
}

function getAllPostsFromDirectory(directory: string, category: "post" | "draft" | "en"): PostData[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const posts: PostData[] = [];

  function walkDirectory(dir: string) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDirectory(filePath);
      } else if (file.endsWith(".md")) {
        const id = filePath.replace(directory, "").replace(/^\//, "").replace(/\.md$/, "");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const matterResult = matter(fileContents);

        const slug = id.replace(/\//g, "-");

        // Extract title from the first line of content if it starts with #
        let title = matterResult.data.title;
        if (!title) {
          const firstLine = matterResult.content.split('\n')[0];
          if (firstLine && firstLine.startsWith('#')) {
            title = firstLine.replace(/^#+\s*/, '').trim();
          }
        }
        if (!title) {
          title = file.replace(".md", "");
        }

        // Extract date from different filename patterns
        let date = matterResult.data.date;
        if (!date) {
          // Try to extract date from filename
          date = extractDateFromFilename(file);
          
          // If only got MM-DD, try to get year from path
          if (!date && file.match(/^(\d{2})-(\d{2})/)) {
            const yearMatch = id.match(/(\d{4})\//);
            if (yearMatch) {
              const monthDayMatch = file.match(/^(\d{2})-(\d{2})/);
              if (monthDayMatch) {
                date = `${yearMatch[1]}-${monthDayMatch[1]}-${monthDayMatch[2]}`;
              }
            }
          }
        }

        posts.push({
          id,
          slug,
          sourcePath: path.relative(process.cwd(), filePath).split(path.sep).join("/"),
          category,
          title,
          date: date || "",
          content: matterResult.content,
        });
      }
    });
  }

  walkDirectory(directory);
  return posts;
}

function extractDateFromFilename(filename: string): string | null {
  // Try different date patterns
  // Pattern 1: YYYY-MM-DD at the beginning
  let match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  if (match) return match[1];
  
  // Pattern 2: MM-DD at the beginning (assume current or recent year)
  match = filename.match(/^(\d{2})-(\d{2})/);
  if (match) {
    // For posts in posts/2022, posts/2023, etc., we can infer the year from the path
    // But for now, we'll need to handle this at a higher level
    return null;
  }
  
  return null;
}

export function getAllPosts(): PostData[] {
  const posts = getAllPostsFromDirectory(postsDirectory, "post");
  const drafts = getAllPostsFromDirectory(draftsDirectory, "draft");
  const enPosts = getAllPostsFromDirectory(enDirectory, "en");

  const allPosts = [...posts, ...drafts, ...enPosts];

  return allPosts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPublishedPosts(): PostData[] {
  const posts = getAllPostsFromDirectory(postsDirectory, "post");

  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) return null;

  // Remove the first line if it's a title (starts with #)
  let content = post.content;
  const lines = content.split('\n');
  if (lines[0] && lines[0].trim().startsWith('#')) {
    // Remove the first line (title)
    content = lines.slice(1).join('\n').trim();
  }

  const processedContent = await remark().use(html).process(content);

  return {
    ...post,
    contentHtml: addImageAttributes(resolveRelativeUrls(processedContent.toString(), post, allPosts)),
  };
}

// Newer and older neighbours of a post within the same list (lists are sorted newest first).
export function getAdjacentPosts(posts: PostData[], slug: string): { newer?: PostData; older?: PostData } {
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return { newer: posts[index - 1], older: posts[index + 1] };
}

export function postUrl(post: PostData): string {
  return post.category === "en" ? `/en/posts/${post.slug}/` : `/posts/${post.slug}/`;
}

// Markdown files reference images and other posts relative to their own location
// (e.g. "../../images/posts/..." or "./06-11-decision-fatigue.md") so they preview in editors.
// The same HTML is served under both /posts/ and /en/posts/, so rewrite them to absolute site URLs.
function resolveRelativeUrls(contentHtml: string, post: PostData, allPosts: PostData[]): string {
  const sourceDir = path.posix.dirname(post.sourcePath);

  return contentHtml.replace(/\b(href|src)="([^"]+)"/g, (match, attr: string, url: string) => {
    if (/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(url)) return match;

    const hashIndex = url.indexOf("#");
    const urlPath = hashIndex === -1 ? url : url.slice(0, hashIndex);
    const hash = hashIndex === -1 ? "" : url.slice(hashIndex);
    const resolved = path.posix.normalize(path.posix.join(sourceDir, decodeURI(urlPath)));

    if (resolved.startsWith("images/")) {
      return `${attr}="/${encodeURI(resolved)}${hash}"`;
    }

    if (resolved.endsWith(".md")) {
      const target = allPosts.find((p) => p.sourcePath === resolved);
      if (target) return `${attr}="${postUrl(target)}${hash}"`;
    }

    return match;
  });
}

export function getPostsByCategory(category: "post" | "draft" | "en"): PostData[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s+/gm, '')        // headings
    .replace(/\*\*(.+?)\*\*/g, '$1') // bold
    .replace(/\*(.+?)\*/g, '$1')     // italic
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1') // images (before links, which share the [..](..) syntax)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/`{1,3}[^`]*`{1,3}/g, '') // code
    .replace(/^\s*[-*+]\s+/gm, '')   // list markers
    .replace(/^\s*>\s+/gm, '')       // blockquotes
    .replace(/\n{2,}/g, ' ')         // multiple newlines
    .replace(/\n/g, ' ')             // single newlines
    .replace(/\s{2,}/g, ' ')         // multiple spaces
    .trim();
}

// Give images their intrinsic size (prevents layout shift) and lazy-load all but the first one,
// which is usually the largest contentful paint.
function addImageAttributes(contentHtml: string): string {
  let index = 0;

  return contentHtml.replace(/<img\b([^>]*?)\s*\/?>/g, (match, attrs: string) => {
    let extra = index++ === 0 ? ' fetchpriority="high"' : ' loading="lazy"';
    extra += ' decoding="async"';

    const src = attrs.match(/\bsrc="([^"]+)"/)?.[1];
    if (src?.startsWith("/") && !/\bwidth=/.test(attrs)) {
      const file = path.join(publicDirectory, decodeURI(src));
      if (fs.existsSync(file)) {
        const { width, height } = imageSize(fs.readFileSync(file));
        if (width && height) extra += ` width="${width}" height="${height}"`;
      }
    }

    return `<img${attrs}${extra}>`;
  });
}
