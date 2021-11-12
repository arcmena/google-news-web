import { Button } from '../../elements/Button/Button'
import { Heading } from '../../elements/Heading/Heading'
import { Paragraph } from '../../elements/Paragraph/Paragraph'
import { Shape } from '../../elements/Shape/Shape'
import { Subtitle } from '../../elements/Subtitle/Subtitle'

import { CardContentContainer } from './styles'

import { CardContentProps } from './types'

export function CardContent({
  title,
  subtitle,
  paragraph,
  buttonLabel,
  buttonAction
}: CardContentProps) {
  return (
    <CardContentContainer>
      <Shape>
        <Heading className="card_title">{title}</Heading>
        <Subtitle className="card_subtitle">{subtitle}</Subtitle>
        <Paragraph className="card_paragraph">{paragraph}</Paragraph>
        <Button onClick={buttonAction}>{buttonLabel}</Button>
      </Shape>
    </CardContentContainer>
  )
}
