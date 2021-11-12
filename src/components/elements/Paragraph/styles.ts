import styled from 'styled-components'

import {
  FontSizeXs,
  FontWeightRegular,
  LineHeightDistant,
  NeutralColor4
} from '../../../styles/design-tokens'

export const ParagraphContainer = styled.p`
  font-size: ${FontSizeXs};
  line-height: ${LineHeightDistant};
  font-weight: ${FontWeightRegular};
  color: ${NeutralColor4};
`
