import styled from 'styled-components'
import {
  FontSizeLg,
  FontWeightBold,
  LineHeightDistant,
  NeutralColor5
} from '../../../styles/design-tokens'

export const HeadingContainer = styled.h1`
  font-size: ${FontSizeLg};
  line-height: ${LineHeightDistant};

  font-weight: ${FontWeightBold};
  color: ${NeutralColor5};
`
