import { JSXElementConstructor, ReactNode } from 'react'

export interface ParagraphProps {
  as?: string | JSXElementConstructor<any>
  children: ReactNode
}
