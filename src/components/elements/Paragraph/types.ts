import { BaseHTMLAttributes, JSXElementConstructor } from 'react'

export interface ParagraphProps
  extends BaseHTMLAttributes<HTMLParagraphElement> {
  as?: string | JSXElementConstructor<any>
}
