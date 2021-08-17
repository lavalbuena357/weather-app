import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCity } from '../../redux/actions'
import { cityDetail } from '../../redux/actions';
import style from './Main.module.css'
import { FaSearch } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"

import Cards from '../Cards/Cards'
import Detail from '../Detail/Detail'
import FirstCard from '../FirstCard/FirstCard'

function Main({ getCity, cityDetail, city }) {
  const [cities, setCities] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [idCity, setIdCity] = useState(false)

  function handleChange(e) {
    setSearchInput(e.target.value.toLowerCase())
  }
  
  function handleSearch(e) {
    e.preventDefault()
    if(!city.find(el => el.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === searchInput) || !cities.includes(searchInput)) {
      setCities([...cities, searchInput])
      getCity(searchInput)
      setSearchInput('')
    }
  }

  async function handleDetails(id) {
    await cityDetail(id)
    setIdCity(true)
  }

  return (
    <div className={style.container}>
      {idCity ? 
      <div className={style.detail_ctn}>
        <Detail setIdCity={setIdCity} />
      </div>: null}
      <div className={style.aside}>
        <div className={style.search_ctn}>
          <div className={style.searchWrapper}>
            <form onSubmit={(e) => handleSearch(e)}>
              <input 
                type="text" 
                placeholder='Buscar por ciudad...' 
                id='search' 
                className={style.search} 
                value={searchInput}
                autoComplete='off'
                onChange={(e) => handleChange(e)} />
              <FaSearch 
                onClick={(e) => handleSearch(e)} 
                className={style.button} />
            </form>
          </div>
          <BiCurrentLocation className={style.location}/>
        </div>
        <div className={style.other}>

        </div>
          {city.length ? 
          <FirstCard 
            id={city[city.length-1].id}
            name={city[city.length-1].name}
            country={city[city.length-1].sys.country}
            temp={city[city.length-1].main.temp}
            min={city[city.length-1].main.temp_min}
            max={city[city.length-1].main.temp_max}
            icon={city[city.length-1].weather[0].icon}
            weather={city[city.length-1].weather[0].main}
            handleDetails={handleDetails}
          /> : null}
        </div>
      <div className={style.cards_ctn}>
        <Cards handleDetails={handleDetails} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    city: state.city
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCity: (data) => dispatch(getCity(data)),
    cityDetail: (data) => dispatch(cityDetail(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);