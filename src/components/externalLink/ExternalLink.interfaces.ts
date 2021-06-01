import { ReactElement } from 'react'

export interface ExternalLinkProps {
  'aria-label': string
  children: ReactElement
  className?: string
  href: string
  tabIndex?: number
}
