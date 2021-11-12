import { HeadingProps } from './types'

import { HeadingContainer } from './styles'

export default function Heading({ ...rest }: HeadingProps) {
  return <HeadingContainer {...rest}></HeadingContainer>
}
