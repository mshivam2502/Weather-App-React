import ForecastCard from "./ForecastCard";
import sun from "./images/sun.svg"


export default function Container() {

  return (
    <div className="container">
      <div className="container-head">
        <img src={sun}></img>
        <h1>39.2&deg;</h1>
        <h3>City,country</h3>
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
            <td>00</td>
            <td>Humidity</td>
            <td>00</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>00</td>
            <td>UV</td>
            <td>00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
