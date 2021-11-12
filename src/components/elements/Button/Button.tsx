import { ButtonContainer } from './styles'

import { ButtonProps } from './types'

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
