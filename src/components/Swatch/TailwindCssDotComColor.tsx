import React from 'react'
import { SwatchProps } from '.'
import copyToClipboard from '../../copyToClipboard'

export const TailwindCssDotComColor = ({
  appendToClassName = '',
  className = 'h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0',
  name = '',
  modifier = '',
  separator = '-',
  value,
}: SwatchProps) => {
  const displayedValue = modifier ? `${name}${separator}${modifier}` : name

  return (
    <div>
      <div
        className={className + appendToClassName}
        onClick={() => copyToClipboard(value)}
        style={{ backgroundColor: value }}
      ></div>
      <p className="mb-2">{value}</p>
      <p>{displayedValue}</p>
    </div>
  )
}
