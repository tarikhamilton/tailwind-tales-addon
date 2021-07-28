import { createContext } from 'react'

export function managerEntries(entry = []) {
  return [...entry, require.resolve('./register')] //👈 addon implementation
}

export const TailwindTalesContext = createContext({})

export const TailwindTaleProvider = TailwindTalesContext.Provider
