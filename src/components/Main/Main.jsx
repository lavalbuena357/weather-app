import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getCity } from '../../redux/actions'
import style from './Main.module.css'
import { FaSearch } from "react-icons/fa";
import Cards from '../Cards/Cards'

function Main({ getCity }) {
  const [cities, setCities] = useState([])

  let cityStr = '' 

  function clear() {
    let textInput = document.getElementById('search')
    if(textInput !== null) {
      textInput.value = ''
    }
  }
  
  function handleChange(e) {
    cityStr = e.target.value.toLowerCase()
  }
  
  function handleSearch(e) {
    e.preventDefault()
    if(!cities.includes(cityStr)) {
      setCities([...cities, cityStr])
      getCity(cityStr)
    }
    clear()
  }

  return (
    <div className={style.container}>
      <div className={style.search_ctn}>
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="search" placeholder='Search city...' id='search' className={style.search} onChange={(e) => handleChange(e)} />
          <FaSearch onClick={(e) => handleSearch(e)} className={style.button} />
        </form>
      </div>
      <div className={style.content}>
        <Cards />
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getCity: (data) => dispatch(getCity(data))
  }
}

export default connect(null, mapDispatchToProps)(Main);