import React from 'react'
import { formatColors, PaletteProps } from '.'
import { default as DefaultColor } from '../Swatch'
import { TailwindCssDotComColor } from '../Swatch/TailwindCssDotComColor'

export const TailwindcssDotcomPalette = ({
  colors,
  Swatch = TailwindCssDotComColor,
  NestedColors = NestedColorsComponent,
}: PaletteProps) => (
  <>
    {formatColors(colors).map(([name, color]) => (
      <section
        key={name}
        className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
      >
        <Title name={name} />
        {typeof color !== 'string' ? (
          <NestedColors name={name} colors={color.variants} Swatch={Swatch} />
        ) : (
          <Swatch name={name} value={color}></Swatch>
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
  Swatch = DefaultColor,
}: PaletteProps) => (
  <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
    {Object.entries(colors).map(([variant, color]: any) => (
      <Swatch
        key={color}
        Component={TailwindCssDotComColor}
        name={name}
        modifier={variant}
        value={color}
      />
    ))}
  </div>
)
