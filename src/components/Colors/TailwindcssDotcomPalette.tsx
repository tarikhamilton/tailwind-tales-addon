import React from 'react'
import { PaletteProps } from '.'
import { default as DefaultColor } from './../Color'

export const NestedColorsComponent = ({
  name,
  colors,
  Color = DefaultColor,
}: PaletteProps) => (
  <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
    {Object.entries(colors).map(([variant, color]: any) => (
      <Color key={color} name={`${name}-${variant}`} value={color} />
    ))}
  </div>
)

export const TailwindcssDotcomPalette = ({
  colors,
  Color = DefaultColor,
  NestedColors = NestedColorsComponent,
}: PaletteProps) => (
  <>
    {colors.map(([name, color]) => (
      <section
        key={name}
        className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
      >
        <Title name={name} />
        {typeof color !== 'string' ? (
          <NestedColors name={name} colors={color.variants} Color={Color} />
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
