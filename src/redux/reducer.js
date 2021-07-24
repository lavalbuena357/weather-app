import { GET_CITY } from "./actions"

const initialState = {
  city: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_CITY:
      return {...state,
        city: [...state.city, action.payload]
      }
    default:
      return state
  }
}

export default reducer;