import sun from "./images/sun.svg"

export default function ForecastCard(){
    return(
        <div className="forecast-card">
            <h3>Time</h3>
            <img src={sun}></img>
            <h3>Temp</h3>
        </div>
    )
}