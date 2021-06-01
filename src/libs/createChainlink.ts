import { createChainlinkElement } from './createChainlinkElement'

export function createChainlink(
  tags: Array<keyof HTMLElementTagNameMap>,
): void {
  if (document !== undefined) {
    tags.forEach((tag) => {
      const elements = document.querySelectorAll(`#__next * ${tag}`)
      const elementsLength = elements.length
      let startingIndex = 0
      if (tag === 'h1' || tag === 'h2') {
        startingIndex = 1
      }
      for (let i = startingIndex; i < elementsLength; i = (i + 1) | 0) {
        const text = elements[i].textContent?.replaceAll(' ', '-')
        if (text !== undefined) {
          const anchorLink = document.createElement('a')
          anchorLink.setAttribute('href', `#${text}`)
          anchorLink.setAttribute('aria-label', text)
          anchorLink.setAttribute(
            'class',
            `chainlink markdown-chainlink ${tag}-chainlink`,
          )

          const chainlink = createChainlinkElement()
          anchorLink.appendChild(chainlink)

          elements[i].setAttribute('id', text)
          elements[i].setAttribute('class', 'relative')

          elements[i].appendChild(anchorLink)
        }
      }
    })
  }
}
