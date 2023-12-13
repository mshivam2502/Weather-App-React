import TimeConversion from "./TimeConversion"
import clear from "./images/sun.svg";
import thunderstorm from "./images/thunderstorm.png";
import snow from "./images/snow.png";
import clouds from "./images/clouds.png";
import rain from "./images/rain.gif";
import drizzle from "./images/drizzle.png";
import smoke from "./images/smoke.png"
import React from "react";

export default function ForecastCard(props){

    let time = TimeConversion(props.arr.dt);
    let temp = props.arr.temp;

    const [bgImg,setBgImg] = React.useState(clear);
  
   React.useEffect(()=>{
    switch (props.weatherData[props.count].weather[0].main) {
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


    return(
        <div className="forecast-card">
            <h3>{time}</h3>
            <img src={bgImg}></img>
            <h3>{typeof(temp)=='number'? temp: temp.max}</h3>
        </div>
    )
}