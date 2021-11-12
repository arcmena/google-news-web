import styled from 'styled-components'

import {
  BorderSizeNone,
  BrandColorPrimary3,
  BrandColorPrimary4,
  FontSizeXs,
  FontWeightMedium,
  LineHeightTight,
  NeutralColor1,
  SpacingSquishSizeSmStack
} from '../../../styles/design-tokens'

import { ButtonProps } from './types'

export const ButtonContainer = styled('button')<ButtonProps>`
  //style reset
  border: none;

  font-size: ${FontSizeXs};
  line-height: ${LineHeightTight};
  border-radius: ${BorderSizeNone};
  padding: ${SpacingSquishSizeSmStack};

  font-weight: ${FontWeightMedium};
  color: ${NeutralColor1};
  background-color: ${BrandColorPrimary3};

  transition: background-color 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: ${BrandColorPrimary4};
  }
`
