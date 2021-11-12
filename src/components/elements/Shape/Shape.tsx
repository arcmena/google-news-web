import { ShapeProps } from './types'

import { ShapeContainer } from './styles'

export function Shape({ children, ...props }: ShapeProps) {
  return <ShapeContainer {...props}>{children}</ShapeContainer>
}
