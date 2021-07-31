import { Meta } from '@storybook/react'
import colors from 'tailwindcss/colors'
import { TailwindCssDotComColor } from '../Color'
import BasicPalette from './BasicPalette'
import { TailwindcssDotcomPalette } from './TailwindcssDotcomPalette'

export default {
  title: 'Palettes',
} as Meta

export const Basic = () => <BasicPalette colors={colors} />

export const BasicWithVariants = () => (
  <BasicPalette colors={colors} showVariants />
)

export const TailwindcssDotcom = () => (
  <TailwindcssDotcomPalette colors={colors} Swatch={TailwindCssDotComColor} />
)
