import React from 'react'
import { useGlobals } from '@storybook/api'
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'
import BasicPalette from './components/Colors/BasicPalette'


const ADDON_ID = 'tailwind-tales'
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Design Tokens',
    render: ({ active, key, ...rest }) => {
      const [{ tailwindConfig }] = useGlobals()
      const colors = tailwindConfig?.theme?.colors

      return (
        <AddonPanel active={active} key={key}>
          <BasicPalette colors={colors} showVariants />
        </AddonPanel>
      )
    },
  })
})
