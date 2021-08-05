import { ReactElement } from 'react'
import { SwatchProps } from '../Swatch'

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

const EXCLUDE_LIST = ['black', 'white', 'transparent', 'current']
const DEFAULT_COLOR_WEIGHT = 400

const defaultOptions = {
  exclude: EXCLUDE_LIST,
  defaultColorWeight: DEFAULT_COLOR_WEIGHT,
}

export function formatColors(
  colors: TailwindColor,
  options: {
    exclude?: string[]
    defaultColorWeight?: number | string
  } = defaultOptions
): FormattedColor[] {
  return Object.entries(colors)
    .filter(([name]) => !options.exclude?.includes(name))
    .map(([name, color]) => {
      if (typeof color !== 'string') {
        const defaultColor =
          colors[name].DEFAULT ||
          colors[name][options?.defaultColorWeight] ||
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
