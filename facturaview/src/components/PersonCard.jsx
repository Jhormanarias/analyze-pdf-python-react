import React from 'react'

export const PersonCard = ({ character }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{character.name}</h3>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <img src={character.image} alt={character.name} width={150} />
    </div>
  )
}
