# tailwind-tales-addon

Show your colors and other design tokens in Storybook with easy-to-use composable components.

## Installation

Add your Tailwind config to your Storybook's globals. Make sure Tailwind styles are loaded in Storybook.

```js
import tailwindConfig from '../tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'

// How you include Tailwind classes is up to you.
import './tailwind.css'

export const globals = {
  tailwindConfig: resolveConfig(tailwindConfig),
}
```

In any story, access the globals in the second parameter to get your Tailwind config and pass a Palette component the colors!

```js
import { BasicPalette } from 'tailwind-tales-addon'

export default {
  title: 'Colors',
  component: BasicPalette,
}

export const Palette = (args, { globals: { tailwindConfig } }) => {
  <BasicPalette colors={tailwindConfig.theme.colors} showVariants />
)
```