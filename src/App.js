import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import React from "react";

function App() {
  var apiId = "appid=f6a7d207b47b9da6f9fdd5b3b90fafee";
  const [state, setState] = React.useState();

  function callAPI(city) {
    /*http://api.openweathermap.org/geo/1.0/direct?q=panvel&limit=2&appid=f6a7d207b47b9da6f9fdd5b3b90fafee */
    /*https://api.openweathermap.org/data/2.5/onecall?lat=19.0019&lon=73.1241&appid=f6a7d207b47b9da6f9fdd5b3b90fafee&units=metric */

    /* --------------------------------Latitude & Longitude------------------------------------- */
    ///*
    let LatLonUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&${apiId}`;
    fetch(LatLonUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API call unsuccessful");
        }
        return res.json();
      })
      .then((data) => {
        /* ------------------------------------------------------------------------------------------- */

        /* -----------------------------Weather Data API Call----------------------------------------- */

        let WeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&${apiId}&units=metric`;
        fetch(WeatherAPI)
          .then((res) => {
            if (!res.ok) {
              throw new Error("API call unsuccessful");
            }
            return res.json();
          })
          .then((Wdata) => {
            init(Wdata,city);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error)=>{
        console.log(error);
      })

    /* ------------------------------------------------------------------------------------------- */
  }

  //This function is triggered from Navbar component
  function handleClick(city) {
    callAPI(city);
  }

  function init(responseFromServer,city) {
    setState(() => {
      return <Container weatherData={responseFromServer} city={city} arr={responseFromServer.hourly} state={state}/>;
    });
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {/* <Container weatherData={callAPI}/> */}
      {state}
    </div>
  );
}

export default App;
