export const initialState = {
  products: {},
  favorites: [],
  lastSearchedId: null
}

export function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
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