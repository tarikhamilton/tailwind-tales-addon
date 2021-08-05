import React from 'react'
import Swatch, { ColorComponentProps, SwatchProps } from '.'
import copyToClipboard from '../../copyToClipboard'

export const TailwindCssDotComColor = ({
  className,
  colorName,
  value,
  copyColorName,
  copyColorValue,
}: ColorComponentProps) => (
  <div className="mb-2">
    <div
      className={`h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 cursor-pointer ${className}`}
      onClick={copyColorValue}
      style={{ backgroundColor: value }}
    ></div>
    <div className="md:flex justify-between">
      <p className="text-gray-900" onClick={copyColorName}>
        {colorName}
      </p>
      <p className="text-gray-500" onClick={copyColorValue}>
        {value}
      </p>
    </div>
  </div>
)

export const TailwindCssDotComSwatch = (props: ColorComponentProps) => {
  return <Swatch Component={TailwindCssDotComColor} {...props}></Swatch>
}

export default TailwindCssDotComColor
