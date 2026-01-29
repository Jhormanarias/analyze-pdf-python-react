import React from 'react'
import { useState } from 'react'
import { useCharacter } from '../context/CharacterContext'
import { fetchCharacterById } from '../services/characterAPI'

export const SearchForm = ({onSubmit})  => {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return
    onSubmit(input)
    setInput('')
  }

  return (
      <>
          <form onSubmit={handleSubmit}>
              <input
                  type="number"
                  placeholder="Buscar por ID"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Buscar</button>
          </form>
      </>
  )
}
