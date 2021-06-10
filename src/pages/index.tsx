import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Post } from '../@types/post'
import { Layout } from '../components/layout'
import { getAllPosts } from '../libs/getAllPosts'

interface IndexProps {
  allPosts: Post[]
}

export default function Index({ allPosts }: IndexProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Thomathoughts</title>
      </Head>
      <ul className="pl-0 list-none">
        {allPosts.flatMap(({ id, date, description, title }) => (
          <li key={id} className="first:mt-0 mt-10">
            <Link href={`/posts/${id}`} passHref>
              <a className="p-4 block text-white border border-gray-800 shadow-2xl rounded-lg transition-transform transform hover:scale-105 focus:scale-105">
                <div>
                  <h2 className="my-0 py-0 text-brand font-title border-none">
                    {title}
                  </h2>
                  <small>{date}</small>
                  <p className="my-0">{description}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

interface GetStaticPropsResult {
  props: {
    allPosts: Post[]
  }
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  const posts = (await getAllPosts({ field: 'meta' })) as Post[]
  const sortedPosts = posts.sort((a, b) => {
    if (a?.date < b?.date) {
      return 1
    } else {
      return -1
    }
  })
  return {
    props: {
      allPosts: sortedPosts,
    },
  }
}
