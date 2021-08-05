import React from 'react'
import styled from 'styled-components'
import copyToClipboard from '../../copyToClipboard'
export interface ColorComponentProps {
  /** Overwrite the default className. Use appendToClassName to add onto it. */
  className?: string
  /** Appends to className. */
  appendToClassName?: string
  /** Color name with no modifiers. */
  name?: string
  /** Color modifier name for nested colors.  */
  modifier?: string
  /** The separator value for color and modifier, default is '-' (hyphen). */
  separator?: string
  /** Color value such as hex or rgb. */
  value: string
  /** Color variants. */
  variants?: Record<number | string, string>
  /** Copy Tailwind class name to clipboard instead of color value. */
  copyClassName?: boolean
  /** Computed color name. */
  colorName?: string
  /** Callback function for when the color is clicked. */
  onClick?: () => void
  copyColorName?: () => void
  copyColorValue?: () => void
}
export interface SwatchProps extends ColorComponentProps {
  Component?: (props: ColorComponentProps) => any
}

export const Swatch = ({
  className = '',
  name = '',
  modifier = '',
  separator = '-',
  value,
  copyClassName = false,
  Component = BasicColor,
}: SwatchProps) => {
  const colorName = modifier ? `${name}${separator}${modifier}` : name

  return (
    <Component
      className={className}
      colorName={colorName}
      copyColorName={() => copyToClipboard(colorName)}
      copyColorValue={() => copyToClipboard(value)}
      name={name}
      modifier={modifier}
      value={value}
    />
  )
}

export default Swatch

export const BasicColor = ({
  className = '',
  value,
  colorName,
}: ColorComponentProps) => (
  <StyledColor
    className={`h-32 w-32 flex flex-col items-center justify-center shadow-lg cursor-pointer ${className}`}
    style={{ backgroundColor: value }}
  >
    <p className="mb-2">{value}</p>
    {<p>{colorName}</p>}
  </StyledColor>
)

export const BasicColorSwatch = (props: ColorComponentProps) => {
  return <Swatch Component={BasicColor} {...props}></Swatch>
}

const StyledColor = styled.div`
  &:before {
    padding-top: 100%;
  }

  text-align: center;
  margin: 8px;
  padding: 8px;
`
