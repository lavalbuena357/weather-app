import React from 'react'
import style from './Header.module.css'
import { 
  TiWeatherCloudy ,
  TiWeatherNight,
  TiWeatherPartlySunny, 
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny} from "react-icons/ti";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title_ctn}>
          <h1>Al<span>Clima</span></h1>
          <span className={style.subtitle}>Consulta información del clima de cualquier ciudad.</span>
        </div>
        <div className={style.icons_ctn}>
          <TiWeatherCloudy/>
          <TiWeatherNight/>
          <TiWeatherPartlySunny/> 
          <TiWeatherShower/>
          <TiWeatherStormy/>
          <TiWeatherSunny/>
        </div>
      </div>
      
    </div>
  )
}

export default Header;