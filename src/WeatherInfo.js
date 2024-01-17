import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
     <h1>{props.dta.city}</h1>
       <ul>
         <li>
            <FormattedDate date={props.data.date} />
            </li>
          <li className="text-capitalize">{props.data.description}
          </li>
         </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={props.data.imgUrl}
                  alt={props.data.description}
                  className="float-left"
                />
                <div className="float-left">
                   <span className="temperture">
                  {Math.round(props.data.temperature)}</span>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    
      