import React from 'react'
import { useCharacter } from '../context/CharacterContext'
import {PersonCard} from './PersonCard'

export const HistoryList = () => {
    const { state, dispatch } = useCharacter()
  const ids = Object.keys(state.characters)

  if (ids.length === 0) return null

  return (
    <div>
      <h2>Historial de búsquedas</h2>
      {ids.map((id) => (
        <div key={id} onClick={() => dispatch({ type: 'SET_LAST_SEARCHED', payload: parseInt(id) })}>
          <PersonCard character={state.characters[id]} />
        </div>
      ))}
    </div>
  )
}
