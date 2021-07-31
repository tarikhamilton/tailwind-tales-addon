import React from 'react'
import { Story, Meta } from '@storybook/react'
import Swatch from '.'

export default {
  title: 'Swatch',
  component: Swatch,
} as Meta

export const Primary = () => (
  <Swatch name="Bad Dad" value="#baddad" />
)
