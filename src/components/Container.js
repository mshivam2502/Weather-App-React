import React from "react";
import ForecastCard from "./ForecastCard";
import clear from "./images/sun.svg";
import thunderstorm from "./images/thunderstorm.png";
import snow from "./images/snow.png";
import clouds from "./images/clouds.png";
import rain from "./images/rain.gif";
import drizzle from "./images/drizzle.png";
import smoke from "./images/smoke.png"

export default function Container(props) {
  // console.log(props.weatherData.current.weather[0].main);
  /* This is the current weather data formualtion */
  let currentTemp = props.weatherData.current.temp;
  let wind = props.weatherData.current.wind_speed;
  let humidity = props.weatherData.current.humidity;
  let visibility = props.weatherData.current.visibility / 1000;
  let uvi = props.weatherData.current.uvi;
  let city = props.city.toUpperCase();

  /* Parameters for the Small Cards created here  */
  let today = props.arr[1];
  let tommorow = props.weatherData.daily[1];
  let after = props.weatherData.daily[2];

  /* Background image */
  const [bgImg,setBgImg] = React.useState();
  
   React.useEffect(()=>{
    switch (props.weatherData.current.weather[0].main) {
      case "Clouds":
        setBgImg(clouds);
        break;
      case "Thunderstorm":
        setBgImg(thunderstorm);
        break;
      case "Drizzle":
        setBgImg(drizzle);
        break;
      case "Rain":
        setBgImg(rain);
        break;
      case "Snow":
        setBgImg(snow);
        break;
      case "Clear":
        setBgImg(clear);
        break;
      case "Smoke":
        setBgImg(smoke);
        break;
      default:
        setBgImg(clouds);
    }
   },[props.state]) 
  

  return (
    <div className="container">
      <div className="container-head">
        <img src={bgImg} alt="weather"></img>
        <h1>{currentTemp}&deg;</h1>
        <h3>{city}</h3>
        <small>{props.weatherData.current.weather[0].main}</small>
      </div>
      <div className="container-forecast-head">
        <span>Today</span>
        <span>Tommorow</span>
        <span>After</span>
      </div>
      <div className="container-forecast-card">
        <ForecastCard arr={today} weatherData={props.weatherData.daily} count={0} state={bgImg}/>
        <ForecastCard arr={tommorow} weatherData={props.weatherData.daily} count={0} state={bgImg}/>
        <ForecastCard arr={after} weatherData={props.weatherData.daily} count={0} state={bgImg}/>
      </div>
      <div className="container-additional-info">
        <h2>Additinal Info</h2>
        <table>
          <tr>
            <td>Wind</td>
            <td>{wind} m/s</td>
            <td>Humidity</td>
            <td>{humidity} g/m&sup3;</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{visibility} km</td>
            <td>UV</td>
            <td>{uvi}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
