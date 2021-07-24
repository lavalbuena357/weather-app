import React from 'react'
import style from './Card.module.css'
import { ImLocation2 } from 'react-icons/im';
import { IoIosCloseCircle } from "react-icons/io";

function Card({ name, country, min, max, icon, temp, weather }) {
  return (
    <div className={style.container}>
      <div className={style.btn}>
        <IoIosCloseCircle />
      </div>
      <div className={style.head_ctn}>
        <ImLocation2 />
        <h1>{name}</h1>
        <h3>{country}</h3>
      </div>
      <div className={style.temp}>
        <span>{parseInt(temp)}°</span>
        <div className={style.min_max_icon}>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <div className={style.min_max}>
            <span>Max: {max}°</span>
            <span>Min: {min}°</span>
          </div>
        </div>
      </div>
      <div className={style.weather}>
        <p>{weather}</p>
      </div>
    </div>
  )
}

export default Card;