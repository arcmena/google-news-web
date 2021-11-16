import styled from 'styled-components'

import { SpacingSizeXxs } from '../../styles/design-tokens'

export const NewsPageContainer = styled.main`
  padding: ${SpacingSizeXxs};

  .news-page__title {
    margin-bottom: ${SpacingSizeXxs};
  }

  > div:not(:first-child) {
    margin-top: ${SpacingSizeXxs};
  }
`
