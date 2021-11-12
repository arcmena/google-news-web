import { HeadingProps } from './types'

import { HeadingContainer } from './styles'

export function Heading({ ...rest }: HeadingProps) {
  return <HeadingContainer {...rest}></HeadingContainer>
}
