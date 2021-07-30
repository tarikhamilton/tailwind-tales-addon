import React from 'react'
import styled from 'styled-components'
import { PaletteProps } from '.'
import Color, { ColorProps } from '../Color'

export const BasicPalette = ({
  className = 'flex flex-wrap',
  colors,
  showVariants = false,
}: PaletteProps) => (
  <div className={className}>
    {colors.map(([name, color]) => {
      if (showVariants && typeof color !== 'string') {
        return (
          <div key={name} className="flex flex-wrap">
            {Object.keys(color.variants).map((value) => (
              <Color
                key={name + value}
                name={name}
                modifier={value}
                value={color.variants[value]}
              />
            ))}
          </div>
        )
      } else if (typeof color !== 'string') {
        return <Color key={color.value} name={name} value={color.value} />
      } else {
        return <Color key={color} name={name} value={color} />
      }
    })}
  </div>
)

export const StyledBasicPalette = styled(BasicPalette)`
  display: flex;
  flex-wrap: wrap;
`

export default BasicPalette
