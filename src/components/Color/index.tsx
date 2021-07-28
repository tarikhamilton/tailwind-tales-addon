import React from 'react'
import styled from 'styled-components'
import copyToClipboard from '../../copyToClipboard'

export interface ColorProps {
  /** Overwrite the default className. Use appendToClassName to add onto it. */
  className?: string
  /** Appends to className. */
  appendToClassName?: string
  /** Color name. */
  name?: string
  /** Color modifier name for nested colors.  */
  modifier?: string
  /** The separator value for color and modifier, default is '-' (hyphen). */
  separator?: string
  /** Color value such as hex or rgb. */
  value: string
  /** Copy Tailwind class name to clipboard instead of color value. */
  copyClassName?: boolean
}

const IGNORED_COLOR_VALUES = ['transparent', 'current', 'black', 'white']
const DEFAULT_COLOR_WEIGHT = 400

export const Color = ({
  appendToClassName = '',
  className = 'w-full',
  name = '',
  modifier = '',
  separator = '-',
  value,
  copyClassName = false,
}: ColorProps) => {
  const displayedValue = `${name}${separator}${modifier}`
  const fullClassName = className + appendToClassName

  return (
    <StyledColor
      className={fullClassName}
      onClick={() => copyToClipboard(copyClassName ? fullClassName : value)}
      style={{ backgroundColor: value }}
    >
      <p className="mb-2">{value}</p>
      {<p>{displayedValue}</p>}
    </StyledColor>
  )
}

export default Color

export const TailwindCssDotComColor = ({
  appendToClassName = '',
  className = 'h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0',
  name = '',
  modifier = '',
  value,
}: ColorProps) => (
  <div>
    <div
      className={className + appendToClassName}
      onClick={() => copyToClipboard(value)}
      style={{ backgroundColor: value }}
    ></div>
    <p className="mb-2">{value}</p>
    {name && <p>{name}</p>}
  </div>
)

const StyledColor = styled.div`
  &:before {
    padding-top: 100%;
  }

  text-align: center;
  margin: 8px;
  padding: 8px;
`

interface PaletteProps {
  className?: string
  colors: any
  showVariants?: boolean
}

const Palette = ({
  className = '',
  colors,
  showVariants = false,
}: PaletteProps) => (
  <div className={className}>
    {colors &&
      Object.keys(colors)
        .filter((color) => !IGNORED_COLOR_VALUES.includes(color))
        .map((color) => {
          const defaultColor =
            colors[color].DEFAULT ||
            colors[color][DEFAULT_COLOR_WEIGHT] ||
            colors[color]

          return { name: color, defaultColor, variants: colors[color] || [] }
        })
        .map(({ name, defaultColor: value, variants }) => (
          <>
            {showVariants ? (
              Object.keys(variants).map((value) => (
                <Color
                  key={variants[value]}
                  name={name}
                  modifier={value}
                  value={variants[value]}
                />
              ))
            ) : (
              <Color key={value} name={name} value={value} />
            )}
          </>
        ))}
  </div>
)

export const StyledPalette = styled(Palette)`
  display: flex;
  flex-wrap: wrap;
`
