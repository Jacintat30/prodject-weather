import React from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

<<<<<<< HEAD
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false });
  const [city, setCity ] = useState(props.defaultCity);
  function handleResponse(respone) {
    setWeatherData({ 
      ready: true,
      temperature: respone.data.main.temp,
      humidity: respone.data.main.humidity,
      date: new Date(respone.data.dt * 1000),
      description: respone.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: respone.data.name
=======
export default function Weather() {
  let weatherData = {
    city: "Houston",
    temperature: 36,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 100,
    wind: 40
  };
>>>>>>> a5115114bcb6bcf04343256ea42ff11dd61f2f17

    });
  }

  function search() {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
    g=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).yhen(handleResponse);
  }

  function handleSubmit(event) {
    event.preventdefeault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  } 
 
  if (weatherData.ready) {
    return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Searching..."
  }
}
  


