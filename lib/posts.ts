import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const draftsDirectory = path.join(process.cwd(), "draft");
const enDirectory = path.join(process.cwd(), "en");

export interface PostData {
  id: string;
  date: string;
  title: string;
  content: string;
  contentHtml?: string;
  category?: "post" | "draft" | "en";
  slug: string;
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
    contentHtml: processedContent.toString(),
  };
}

export function getPostsByCategory(category: "post" | "draft" | "en"): PostData[] {
  return getAllPosts().filter((post) => post.category === category);
}
