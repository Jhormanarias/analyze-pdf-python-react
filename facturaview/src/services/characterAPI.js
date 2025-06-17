import axios from 'axios'

export async function fetchCharacterById(id) {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  return res.data
}
