import styled from 'styled-components'

import {
  BorderSizeNone,
  BrandColorPrimary3,
  BrandColorPrimary4,
  FontSizeSm,
  FontWeightMedium,
  LineHeightTight,
  NeutralColor1,
  SpacingSquishSizeXsStack
} from '../../../styles/design-tokens'

import { ButtonProps } from './types'

export const ButtonContainer = styled('button')<ButtonProps>`
  //style reset
  border: none;

  font-size: ${FontSizeSm};
  line-height: ${LineHeightTight};
  border-radius: ${BorderSizeNone};
  padding: ${SpacingSquishSizeXsStack};

  font-weight: ${FontWeightMedium};
  color: ${NeutralColor1};
  background-color: ${BrandColorPrimary3};

  transition: background-color 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: ${BrandColorPrimary4};
  }
`
