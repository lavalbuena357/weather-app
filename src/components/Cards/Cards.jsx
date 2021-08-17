import React from 'react'
import style from './Cards.module.css'
import { connect } from 'react-redux'
import Card from '../Card/Card'

function Cards({ city, handleDetails }) {

  const otherCities = city.filter((el, i) => i < city.length-1)
  otherCities.reverse()
  
  return (
    <div className={style.container}>
      {otherCities.map((el, i) => 
        <Card 
          key={i}
          id={el.id}
          name={el.name}
          country={el.sys.country}
          temp={el.main.temp}
          min={el.main.temp_min}
          max={el.main.temp_max}
          icon={el.weather[0].icon}
          weather={el.weather[0].main}
          handleDetails={handleDetails}
        />
      )}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(Cards);