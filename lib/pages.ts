import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface PageData {
  slug: string
  title: string
  content: string
  contentHtml?: string
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  const pagePath = path.join(process.cwd(), `${slug}.md`)

  if (!fs.existsSync(pagePath)) {
    return null
  }

  const fileContents = fs.readFileSync(pagePath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  return {
    slug,
    title: matterResult.data.title || slug,
    content: matterResult.content,
    contentHtml: processedContent.toString()
  }
}