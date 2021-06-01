import { ReactElement } from 'react'
import TweetEmbed from 'react-tweet-embed'

import { TwitterEmbedProps } from './TwitterEmbed.interfaces'

export function TwitterEmbed({ tweetId }: TwitterEmbedProps): ReactElement {
  const options = {
    theme: 'dark',
  }

  return <TweetEmbed id={tweetId} options={options} />
}
