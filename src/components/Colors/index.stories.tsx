import { Meta } from '@storybook/react'
import colors from 'tailwindcss/colors'
import Color, { ColorProps, TailwindCssDotComColor } from '../Color'
import BasicPalette from './BasicPalette'
import { TailwindcssDotcomPalette } from './TailwindcssDotcomPalette'

export default {
  title: 'Palettes',
} as Meta

const EXCLUDE_LIST = ['black', 'white']
const IGNORED_COLOR_VALUES = ['transparent', 'current', 'black', 'white']
const DEFAULT_COLOR_WEIGHT = 400

const cleansedPalette = Object.entries(colors)
  .filter(([name]) => !EXCLUDE_LIST.includes(name))
  .map(([name, color]) => {
    if (typeof color !== 'string') {
      const defaultColor =
        colors[name].DEFAULT ||
        colors[name][DEFAULT_COLOR_WEIGHT] ||
        colors[name]

      return [name, { name, value: defaultColor, variants: colors[name] || [] }]
    } else {
      return [name, color]
    }
  })

console.log(cleansedPalette)

export const Basic = () => <BasicPalette colors={cleansedPalette} />

export const BasicWithVariants = () => (
  <BasicPalette colors={cleansedPalette} showVariants />
)

export const TailwindcssDotcom = () => (
  <TailwindcssDotcomPalette
    colors={cleansedPalette}
    Color={TailwindCssDotComColor}
  />
)
