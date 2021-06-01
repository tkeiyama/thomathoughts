export type Fields = 'code' | 'meta'

export interface Meta {
  date: string
  description: string
  id: string
  title: string
}

export interface FrontMatter {
  code: string
  meta: Meta
}
