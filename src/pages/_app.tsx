import '../styles/global.css'
import '../styles/prism.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
