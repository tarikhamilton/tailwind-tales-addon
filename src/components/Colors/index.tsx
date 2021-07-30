import { ReactElement } from 'react'
import { ColorProps } from '../Color'
export interface PaletteProps {
  name?: string
  className?: string
  colors: [string, string | ColorProps][]
  Color?: (props: ColorProps) => ReactElement
  NestedColors?: any
  showVariants?: boolean
}
