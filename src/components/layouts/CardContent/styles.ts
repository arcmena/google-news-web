import styled from 'styled-components'
import {
  SpacingSizeSm,
  SpacingSizeXxs,
  SpacingSizeXxxs
} from '../../../styles/design-tokens'

export const CardContentContainer = styled.div`
  min-width: 357px;

  .card_title {
    margin-bottom: ${SpacingSizeXxxs};
    word-break: break-word;
  }
  .card_subtitle {
    margin-bottom: ${SpacingSizeXxs};
    word-break: break-word;
  }
  .card_paragraph {
    margin-bottom: ${SpacingSizeSm};
    word-break: break-word;
  }
`
