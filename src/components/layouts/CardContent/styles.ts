import styled from 'styled-components'
import {
  SpacingSizeSm,
  SpacingSizeXxs,
  SpacingSizeXxxs
} from '../../../styles/design-tokens'

export const CardContentContainer = styled.div`
  max-width: 357px;

  .card_title {
    margin-bottom: ${SpacingSizeXxxs};
  }
  .card_subtitle {
    margin-bottom: ${SpacingSizeXxs};
  }
  .card_paragraph {
    margin-bottom: ${SpacingSizeSm};
  }
`
