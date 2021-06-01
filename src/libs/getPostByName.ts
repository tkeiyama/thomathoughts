import { readFile } from 'fs/promises'
import { bundleMDX } from 'mdx-bundler'

import { Fields, FrontMatter, Meta } from '../@types/global'
import { formatDate } from './formatDate'

export interface GetPost {
  postName: string
  field?: Fields
}

export type GetPostResult = Promise<string | Meta | FrontMatter>

export async function getPostByName({
  postName,
  field,
}: GetPost): GetPostResult {
  const fullPath = `${process.cwd()}/posts/${postName}/${postName}.mdx`
  const postContent = await readFile(fullPath, 'utf8')

  const result = await bundleMDX(postContent, {
    cwd: `${process.cwd()}/posts/${postName}`,
  })
  const { code, frontmatter } = result

  const date = formatDate(frontmatter.date)

  const meta: Meta = {
    date,
    description: frontmatter.description,
    id: postName,
    title: frontmatter.title,
  }

  switch (field) {
    case 'code':
      return code
    case 'meta':
      return meta
    default:
      return {
        code,
        meta,
      }
  }
}
