import { GET_CITY, UPDATE_CITIES, CITY_DETAIL } from "./actions"

const initialState = {
  city: [],
  detail: null
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
    case CITY_DETAIL:
      return {...state,
        detail: action.payload
      }
    default:
      return state
  }
}

export default reducer;