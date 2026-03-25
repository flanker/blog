import fs from "fs";
import path from "path";
import matter from "gray-matter";

const siteUrl = "https://fengzhichao.me";
const outDir = path.join(process.cwd(), "public");

function getAllMarkdownFiles(directory, category) {
  if (!fs.existsSync(directory)) return [];
  const posts = [];

  function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walk(filePath);
      } else if (file.endsWith(".md")) {
        const id = filePath.replace(directory, "").replace(/^\//, "").replace(/\.md$/, "");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);
        const slug = id.replace(/\//g, "-");

        let title = data.title;
        if (!title) {
          const firstLine = content.split("\n")[0];
          if (firstLine?.startsWith("#")) {
            title = firstLine.replace(/^#+\s*/, "").trim();
          }
        }
        title = title || file.replace(".md", "");

        let date = data.date;
        if (!date) {
          const match = file.match(/^(\d{4}-\d{2}-\d{2})/);
          if (match) date = match[1];
          else {
            const yearMatch = id.match(/(\d{4})\//);
            const mdMatch = file.match(/^(\d{2})-(\d{2})/);
            if (yearMatch && mdMatch) date = `${yearMatch[1]}-${mdMatch[1]}-${mdMatch[2]}`;
          }
        }

        const plain = content
          .replace(/^#+\s+/gm, "")
          .replace(/\*\*(.+?)\*\*/g, "$1")
          .replace(/\*(.+?)\*/g, "$1")
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
          .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
          .replace(/`{1,3}[^`]*`{1,3}/g, "")
          .replace(/^\s*[-*+]\s+/gm, "")
          .replace(/^\s*>\s+/gm, "")
          .replace(/\n+/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim();

        posts.push({ slug, title, date: date || "", description: plain.substring(0, 300), category });
      }
    }
  }

  walk(directory);
  return posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Generate sitemap.xml
function generateSitemap(zhPosts, enPosts) {
  const urls = [
    { loc: siteUrl, priority: "1.0", changefreq: "weekly" },
    { loc: `${siteUrl}/posts/`, priority: "0.8", changefreq: "weekly" },
    { loc: `${siteUrl}/about/`, priority: "0.5", changefreq: "monthly" },
    { loc: `${siteUrl}/en/`, priority: "0.7", changefreq: "weekly" },
    { loc: `${siteUrl}/en/posts/`, priority: "0.6", changefreq: "weekly" },
    ...zhPosts.map((p) => ({
      loc: `${siteUrl}/posts/${p.slug}/`,
      lastmod: p.date || undefined,
      priority: "0.6",
      changefreq: "monthly",
    })),
    ...enPosts.map((p) => ({
      loc: `${siteUrl}/en/posts/${p.slug}/`,
      lastmod: p.date || undefined,
      priority: "0.5",
      changefreq: "monthly",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
  console.log("Generated sitemap.xml");
}

// Generate feed.xml (RSS)
function generateRssFeed(posts) {
  const items = posts.slice(0, 20).map(
    (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${siteUrl}/posts/${p.slug}/</link>
      <guid>${siteUrl}/posts/${p.slug}/</guid>
      <description>${escapeXml(p.description)}</description>${
      p.date ? `\n      <pubDate>${new Date(p.date).toUTCString()}</pubDate>` : ""
    }
    </item>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>冯智超的个人网站</title>
    <link>${siteUrl}</link>
    <description>有关Tech Lead、技术、产品开发的内容</description>
    <language>zh-CN</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;

  fs.writeFileSync(path.join(outDir, "feed.xml"), xml);
  console.log("Generated feed.xml");
}

// Main
const zhPosts = getAllMarkdownFiles(path.join(process.cwd(), "posts"), "post");
const enPosts = getAllMarkdownFiles(path.join(process.cwd(), "en"), "en");

generateSitemap(zhPosts, enPosts);
generateRssFeed(zhPosts);

console.log(`Total: ${zhPosts.length} zh posts, ${enPosts.length} en posts`);
