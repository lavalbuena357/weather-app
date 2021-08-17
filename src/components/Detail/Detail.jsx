import React from 'react'
import style from './Detail.module.css'
import { connect } from 'react-redux';

import { IoIosCloseCircle } from "react-icons/io";

function Detail({ detail, setIdCity }) {

  function onClose() {
    setIdCity(false)
  }

  function realTime(time) {
    const zone = (time/60)/60
    return `GMT:${zone}`
  }

  const img = detail && detail.weather[0].icon

  return (
    <div className={style.container}>
      {detail ? 
      <div className={style.wrapper}>
        <div className={style.btn}>
          <IoIosCloseCircle className={style.close} onClick={onClose} />
        </div>
        <div className={style.left}>
          <div className={style.sup}>
            <h2>{detail && detail.sys.country}</h2>
            <h1>{detail && detail.name}</h1>
            <h3>{detail && parseInt(detail.main.temp)}°</h3>
            <span>Time: {detail && realTime(detail.timezone)}</span>
            <p>Min: {detail && detail.main.temp_min}°</p>
            <p>Max: {detail && detail.main.temp_max}°</p>
            <span>Longitude: {detail && detail.coord.lon} || </span>
            <span>Latitude: {detail && detail.coord.lat}</span>
          </div>
          <div className={style.inf}>
            <p>Visibility: {detail && detail.visibility}</p>
            <p>Humidity: {detail && detail.main.humidity}%</p>
          </div>
        </div>
        <div className={style.right}>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          <h3>{detail && detail.weather[0].main}</h3>
          <p>{detail && detail.weather[0].description}</p>
          <h4>Clouds: {detail && detail.clouds.all}%</h4>
          <h4>Wind: {detail && detail.wind.speed} km/h</h4>
        </div>
      </div> 
       : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    detail: state.detail
  }
}

export default connect(mapStateToProps)(Detail);