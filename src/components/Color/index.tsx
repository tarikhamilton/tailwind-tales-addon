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
  /** Color variants. */
  variants?: Record<number | string, string>
  /** Copy Tailwind class name to clipboard instead of color value. */
  copyClassName?: boolean
}

export const Color = ({
  appendToClassName = '',
  className = 'h-32 w-32 flex flex-col items-center justify-center shadow-lg',
  name = '',
  modifier = '',
  separator = '-',
  value,
  copyClassName = false,
}: ColorProps) => {
  const displayedValue = modifier ? `${name}${separator}${modifier}` : name
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
