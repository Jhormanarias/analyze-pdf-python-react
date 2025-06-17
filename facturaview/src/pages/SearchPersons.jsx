import { useCharacter } from '../context/CharacterContext'
import { HistoryList } from '../components/HistoryList'
import { SearchForm } from '../components/SearchForm'
import React from 'react'
import { PersonCard } from '../components/PersonCard'
import { fetchCharacterById } from '../services/characterAPI'

export const SearchPersons = () => {

    const CurrentResult = () => {
        const { state } = useCharacter()
        const char = state.characters[state.lastSearchedId]

        return char ? (
            <div>
                <h2>Último personaje buscado:</h2>
                <PersonCard character={char} />
            </div>
        ) : null
    }

    const { dispatch } = useCharacter()

  const searchCharacter = async (id) => {
    const data = await fetchCharacterById(id)
    if (!data) {
      alert('Personaje no encontrado')
      return
    }
    dispatch({ type: 'ADD_CHARACTER', payload: data })
  }

  return (
    <div style={{ padding: '2rem' }}>
        <h1>Centro de control de personajes</h1>
        <SearchForm onSubmit={searchCharacter} />
        <CurrentResult />
        <HistoryList />
      </div>
  )
}
