import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getCity } from '../../redux/actions'
import style from './Main.module.css'
import { FaSearch } from "react-icons/fa";
import Cards from '../Cards/Cards'

function Main({ getCity }) {
  const [cities, setCities] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  function handleChange(e) {
    setSearchInput(e.target.value.toLowerCase())
  }
  
  function handleSearch(e) {
    e.preventDefault()
    if(!cities.includes(searchInput)) {
      setCities([...cities, searchInput])
      getCity(searchInput)
    }
    setSearchInput('')
  }

  return (
    <div className={style.container}>
      <div className={style.search_ctn}>
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