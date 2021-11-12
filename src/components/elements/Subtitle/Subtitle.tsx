import { SubtitleProps } from './types'

import { SubtitleContainer } from './styles'

export function Subtitle({ children, ...props }: SubtitleProps) {
  return <SubtitleContainer {...props}>{children}</SubtitleContainer>
}
