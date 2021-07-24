import axios from 'axios'
import { API_KEY } from '../../env'
export const GET_CITY = 'GET_CITY'
export const UPDATE_CITIES = 'UPDATE_CITIES'

export function getCity(city) {
  return async function(dispatch) {
    try {
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      dispatch ({
        type: GET_CITY,
        payload: weather.data
      })
    } catch(err) {console.log(err)}
  }
}

export function updateCities(id) {
  return  {
    type: UPDATE_CITIES,
    payload: id
  }  
}