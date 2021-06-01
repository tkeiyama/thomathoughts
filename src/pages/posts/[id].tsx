import { getMDXComponent } from 'mdx-bundler/client'
import Head from 'next/head'
import { ReactElement, useEffect, useMemo } from 'react'

import { FrontMatter, Meta } from '../../@types/global'
import { Post } from '../../@types/post'
import { Layout } from '../../components/layout'
import { createChainlink } from '../../libs/createChainlink'
import { getAllPosts } from '../../libs/getAllPosts'
import { getPostByName } from '../../libs/getPostByName'
import { usePrism } from '../../libs/usePrism'

interface Props {
  post: FrontMatter
}

export default function Component({ post }: Props): ReactElement {
  const Content = useMemo(() => getMDXComponent(post.code), [post.code])

  useEffect(() => {
    usePrism()

    createChainlink(['h1', 'h2', 'h3'])
  }, [])

  return (
    <Layout>
      <Head>
        <title>{post.meta.title} - Thomathoughts</title>
      </Head>
      <h1 className="py-0 font-title text-4xl border-none">
        {post.meta.title}
      </h1>
      <p>{post.meta.date}</p>
      <article className="pt-8">
        <Content />
      </article>
    </Layout>
  )
}

type GetStaticPathsResult = Promise<{
  paths: Array<{
    params: {
      id: string
    }
  }>
  fallback: boolean
}>

export async function getStaticPaths(): GetStaticPathsResult {
  const paths = ((await getAllPosts({ field: 'meta' })) as Post[]).flatMap(
    (post) => {
      return { params: { id: post.id } }
    },
  )

  return {
    paths,
    fallback: false,
  }
}

interface GetStaticProps {
  params: Post
}

type GetStaticPropsResult = Promise<{
  props: {
    post: string | Meta | FrontMatter
  }
}>

export async function getStaticProps({
  params,
}: GetStaticProps): GetStaticPropsResult {
  const post = await getPostByName({ postName: params.id })
  return {
    props: {
      post,
    },
  }
}
