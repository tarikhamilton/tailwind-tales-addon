import React from 'react'
import styled from 'styled-components'
import { formatColors, PaletteProps } from '.'
import Swatch from '../Swatch'

export const BasicPalette = ({
  className = 'flex flex-wrap',
  colors,
  showVariants = false,
}: PaletteProps) => (
  <div className={className}>
    {formatColors(colors).map(([name, color]) => {
      if (showVariants && typeof color !== 'string') {
        return (
          <div key={name} className="flex flex-wrap">
            {Object.keys(color.variants).map((value) => (
              <Swatch
                key={name + value}
                name={name}
                modifier={value}
                value={color.variants[value]}
              />
            ))}
          </div>
        )
      } else if (typeof color !== 'string') {
        return <Swatch key={name} name={name} value={color.value} />
      } else {
        return <Swatch key={name} name={name} value={color} />
      }
    })}
  </div>
)

export const StyledBasicPalette = styled(BasicPalette)`
  display: flex;
  flex-wrap: wrap;
`

export default BasicPalette
