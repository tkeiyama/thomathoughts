import { ReactElement } from 'react'

import { ExternalLinkProps } from './ExternalLink.interfaces'

export function ExternalLink({
  'aria-label': ariaLabel,
  children,
  className,
  href,
  tabIndex,
}: ExternalLinkProps): ReactElement {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      target="_blank"
      rel="nooperner noreferrer"
      tabIndex={tabIndex}
    >
      {children}
    </a>
  )
}
