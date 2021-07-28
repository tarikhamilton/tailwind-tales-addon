import React from 'react'
import { Story, Meta } from '@storybook/react'
import colors from 'tailwindcss/colors'
import Colors from '.'
import { TailwindCssDotComColor } from '../Color'

export default {
  title: 'Colors',
  component: Colors,
} as Meta

const EXCLUDE_LIST = ['black', 'white']

const cleansedPalette = Object.entries(colors).filter(
  ([name]) => !EXCLUDE_LIST.includes(name)
) as [string, string | object][]

export const Primary = () => (
  <Colors colors={cleansedPalette} Color={TailwindCssDotComColor} />
)
