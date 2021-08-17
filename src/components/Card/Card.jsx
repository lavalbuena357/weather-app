import React from 'react'
import { connect } from 'react-redux'
import style from './Card.module.css'
import { ImLocation2 } from 'react-icons/im';
import { IoIosCloseCircle } from "react-icons/io";
import { updateCities } from '../../redux/actions';

function Card({ name, country, min, max, icon, temp, weather, id, updateCities, handleDetails }) {

  function onClose() {
    updateCities(id)
  }

  return (
    <div className={style.container}>
        <div className={style.btn}>
          <IoIosCloseCircle className={style.close} onClick={onClose} />
        </div>
        <div onClick={() => handleDetails(id)} className={style.head_ctn}>
          <ImLocation2 className={style.location} />
          <h2>{name}</h2>
          <h3>{country}</h3>
        </div>
        <div onClick={() => handleDetails(id)} className={style.temp}>
          <h2>{parseInt(temp)}°</h2>
          <div className={style.min_max}>
            <span>Max: {max}°</span>
            <span>Min: {min}°</span>
          </div>
        </div>
        <div onClick={() => handleDetails(id)} className={style.icon}>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <div className={style.weather}>
          <p>{weather}</p>
        </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    updateCities: (data) => dispatch(updateCities(data))
  }
}

export default connect(null, mapDispatchToProps)(Card);