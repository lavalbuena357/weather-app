import axios from 'axios'
import api_key from '../../env'
export const GET_CITY = 'GET_CITY'
export const UPDATE_CITIES = 'UPDATE_CITIES'
export const CITY_DETAIL = 'CITY_DETAIL'

export function getCity(city) {
  return async function(dispatch) {
    try {
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
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

export function cityDetail(id) {
  return async function(dispatch) {
    try {
      const detail = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api_key}&units=metric`)
      dispatch({
        type: CITY_DETAIL,
        payload: detail.data
      })
    } catch(err) {console.log(err)}
  }
}