import { createGlobalStyle } from 'styled-components'

import {
  FontFamilyHighlight,
  FontWeightRegular,
  LineHeightTight,
  NeutralColor5
} from './design-tokens'

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: ${FontFamilyHighlight};
      font-weight: ${FontWeightRegular};
      line-height: ${LineHeightTight};
      color: ${NeutralColor5};;
    }
`
