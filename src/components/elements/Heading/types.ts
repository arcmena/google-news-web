import { BaseHTMLAttributes, JSXElementConstructor } from 'react'

export interface HeadingProps extends BaseHTMLAttributes<HTMLHeadingElement> {
  as?: string | JSXElementConstructor<any>
}
