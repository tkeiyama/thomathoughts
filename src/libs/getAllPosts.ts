import { readdir } from 'fs/promises'

import { Fields, FrontMatter, Meta } from '../@types/global'
import { getPostByName } from './getPostByName'

export interface GetAllPosts {
  field?: Fields
}

export type GetAllPostsResult = Promise<Array<string | Meta | FrontMatter>>

export async function getAllPosts({ field }: GetAllPosts): GetAllPostsResult {
  const postsName = await readdir(`${process.cwd()}/posts`)
  const posts = await Promise.all(
    postsName.flatMap(async (postName) => {
      return await getPostByName({ postName, field })
    }),
  )

  return posts
}
