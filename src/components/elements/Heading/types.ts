import { JSXElementConstructor, ReactNode } from 'react'

export interface HeadingProps {
  as?: string | JSXElementConstructor<any>
  children: ReactNode
}
