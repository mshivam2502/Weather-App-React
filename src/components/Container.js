import ForecastCard from "./ForecastCard";
import sun from "./images/sun.svg"


export default function Container(props) {
  console.log(props.weatherData);
  let currentTemp = props.weatherData.current.temp;
  let wind=props.weatherData.current.wind_speed;
  let humidity=props.weatherData.current.humidity;
  let visibility=props.weatherData.current.visibility/1000;
  let uvi=props.weatherData.current.uvi;
  let city = props.city.toUpperCase();

  return (
    <div className="container">
      <div className="container-head">
        <img src={sun}></img>
        <h1>{currentTemp}&deg;</h1>
        <h3>{city}</h3>
      </div>
      <div className="container-forecast-head">
    
          <span>Today</span>
          <span>Tommorow</span>
          <span>After</span>
        
      </div>
      <div className="container-forecast-card">
        <ForecastCard/>        
        <ForecastCard/>        
        <ForecastCard/>        
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
