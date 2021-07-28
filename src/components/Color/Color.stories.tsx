import React from 'react'
import { Story, Meta } from '@storybook/react'
import Color from '.'

export default {
  title: 'Color',
  component: Color,
} as Meta

export const Primary = () => <Color name="Bad Dad" value="#baddad" />
