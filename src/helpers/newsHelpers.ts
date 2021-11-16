import { MAX_CONTENT_CHARS } from '../constants/newsConstants'

export const cutContent = (content: string) => {
  const cutContent = content.substr(0, MAX_CONTENT_CHARS)

  return `${cutContent}...`
}
