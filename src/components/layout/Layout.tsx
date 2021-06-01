import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { ExternalLink } from '../externalLink'
import { LayoutProps } from './Layout.interfaces'

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="og:title" content={process.env.SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex items-center">
        <Link href="/">
          <a className="transition-transform transform hover:scale-105 focus:scale-105">
            <h2 className="my-0 py-0 w-auto text-white font-title border-none">
              Thomathoughts
            </h2>
          </a>
        </Link>
        <div className="flex flex-1 justify-end">
          <ExternalLink
            aria-label="github"
            className="flex items-center transition-transform transform hover:scale-125 focus:scale-125"
            href="https://github.com/tkeiyama"
          >
            <Image
              src="/icons/github.png"
              alt="github icon"
              height={24}
              width={24}
            />
          </ExternalLink>
          <ExternalLink
            aria-label="twitter"
            className="flex items-center ml-4 transition-transform transform hover:scale-125 focus:scale-125"
            href="https://twitter.com/tkeiyama"
          >
            <Image
              src="/icons/twitter.svg"
              alt="twitter icon"
              height={24}
              width={24}
            />
          </ExternalLink>
        </div>
      </header>
      <main className="mt-16">{children}</main>
    </>
  )
}
