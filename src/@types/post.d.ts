export interface Post {
  id: string
  title: string
  description: string
  date: `${string} ${string}, ${string}`
}

export type PostKeys = keyof Post
