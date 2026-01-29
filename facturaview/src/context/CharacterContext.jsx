import { createContext, useContext, useReducer } from 'react'
import { characterReducer, initialState } from './CharacterReducer'

const CharacterContext = createContext()

export function CharacterProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, initialState)

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter = () => useContext(CharacterContext)
