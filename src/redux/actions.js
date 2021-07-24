import axios from 'axios'
import { API_KEY } from '../../env'
export const GET_CITY = 'GET_CITY'

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