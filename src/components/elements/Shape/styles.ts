import styled from 'styled-components'

import {
  BorderSizeThin,
  NeutralColor1,
  NeutralColor2,
  RadiusSizeNone,
  SpacingSizeSm
} from '../../../styles/design-tokens'

export const ShapeContainer = styled.div`
  border-radius: ${RadiusSizeNone};
  padding: ${SpacingSizeSm};
  border: ${BorderSizeThin} solid ${NeutralColor2};
  background-color: ${NeutralColor1};
`
