import { ReactElement } from 'react'
import { SwatchProps } from '../Color'

export type TailwindColor = Record<string, Record<string | number, string>>

export type FormattedColor = [string, string | SwatchProps]
export interface PaletteProps {
  name?: string
  className?: string
  colors: TailwindColor
  Swatch?: (props: SwatchProps) => ReactElement
  NestedColors?: any
  showVariants?: boolean
}

const EXCLUDE_LIST = ['black', 'white']

const IGNORED_COLOR_VALUES = ['transparent', 'current', 'black', 'white']

const DEFAULT_COLOR_WEIGHT = 400

export function formatColors(colors: TailwindColor): FormattedColor[] {
  return Object.entries(colors)
    .filter(([name]) => !EXCLUDE_LIST.includes(name))
    .map(([name, color]) => {
      if (typeof color !== 'string') {
        const defaultColor =
          colors[name].DEFAULT ||
          colors[name][DEFAULT_COLOR_WEIGHT] ||
          colors[name]

        return [
          name,
          { name, value: defaultColor, variants: colors[name] || [] },
        ] as [string, SwatchProps]
      } else {
        return [name, color] as [string, string]
      }
    })
}
