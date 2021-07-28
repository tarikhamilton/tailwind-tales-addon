import React, { ReactElement, ReactNode } from 'react'
import { default as DefaultColor, ColorProps } from '../Color'

export interface ColorsProp {
  Color?: (props: ColorProps) => ReactElement
  NestedColors?: any
  colors: [string, string | object][]
}

export const Colors = ({
  colors,
  NestedColors = NestedColorsComponent,
  Color = DefaultColor,
}: ColorsProp) => (
  <>
    {colors.map(([name, color]) => (
      <section
        key={name}
        className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
      >
        <Title name={name} />
        {typeof color !== 'string' ? (
          <NestedColors name={name} colors={color} Color={Color} />
        ) : (
          <Color name={name} value={color}></Color>
        )}
      </section>
    ))}
  </>
)

export const Title = ({ name }) => (
  <header className="w-32 flex-shrink-0">
    <h2>{name}</h2>
    <pre>colors.{name}</pre>
  </header>
)

export const NestedColorsComponent = ({
  name,
  colors,
  Color = DefaultColor,
}: {
  name: string
  colors: object
  Color?: (props: ColorProps) => ReactElement
}) => (
  <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
    {Object.entries(colors).map(([variant, color]: [string, string]) => (
      <Color key={color} name={`${name}-${variant}`} value={color} />
    ))}
  </div>
)

export default Colors
