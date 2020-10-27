import React, {Component} from 'react'
import "./weather.css"

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="Weather_focused">

          <div className="Weather_day">ma</div>
          <div className="Weather_time">12.00</div>
          <div className="Weather_temp">14</div>
          <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
        </div>

        <div className="Weather_forecast">

         <div className= "Weather_box">
          <div className="Weather_day">ke</div>
          <div className="Weather_time">11.00</div>
          <div className="Weather_temp">12</div>
          <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
        </div>

        <div className= "Weather_box">
         <div className="Weather_day">pe</div>
         <div className="Weather_time">2.00</div>
         <div className="Weather_temp">-3</div>
         <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
       </div>

       <div className= "Weather_box">
        <div className="Weather_day">ti</div>
        <div className="Weather_time">15.00</div>
        <div className="Weather_temp">17</div>
        <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
      </div>

      </div>

    </div>
    )
  }
}

export default Weather
