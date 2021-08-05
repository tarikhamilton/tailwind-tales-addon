import { Meta } from '@storybook/react'
import colors from 'tailwindcss/colors'
import { TailwindCssDotComSwatch } from '../Swatch/TailwindcssDotcomColor'
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
  <TailwindcssDotcomPalette colors={colors} Swatch={TailwindCssDotComSwatch} />
)
