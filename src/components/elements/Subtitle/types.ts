import { BaseHTMLAttributes, JSXElementConstructor } from 'react'

export interface SubtitleProps extends BaseHTMLAttributes<HTMLHeadingElement> {
  as?: string | JSXElementConstructor<any>
}
