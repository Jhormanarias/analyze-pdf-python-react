export const initialState = {
  characters: {},
  lastSearchedId: null,
}

export function characterReducer(state, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.id]: action.payload,
        },
        lastSearchedId: action.payload.id,
      }

    case 'SET_LAST_SEARCHED':
      return {
        ...state,
        lastSearchedId: action.payload,
      }

    default:
      return state
  }
}
