import { ParagraphProps } from './types'

import { ParagraphContainer } from './styles'

export function Paragraph({ children, ...props }: ParagraphProps) {
  return <ParagraphContainer {...props}>{children}</ParagraphContainer>
}
