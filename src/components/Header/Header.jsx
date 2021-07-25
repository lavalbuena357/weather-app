import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={style.container}>
      <Link to='/'>
        <h1>Weather App</h1>
      </Link>
    </div>
  )
}

export default Header;