import _Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ReactElement } from 'react'

export default class Document extends _Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await _Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Personal blog by Thomas." />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="mx-auto px-6 py-8 md:max-w-2xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
