import { GET_CITY, UPDATE_CITIES } from "./actions"

const initialState = {
  city: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_CITY:
      return {...state,
        city: [...state.city, action.payload]
      }
    case UPDATE_CITIES:
      let update = state.city.filter(el => el.id !== action.payload)
      return {...state,
        city: update
      }
    default:
      return state
  }
}

export default reducer;