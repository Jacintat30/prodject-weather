improt react from React;
import { useState } from "react";
import FormattedDate from "./FormattedDate.js"

export default default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");
    fubction showFarienheit{Event) {
        Event.preventDefault();
        setUnit("fahrenheit");
    }

    function showClsius(event) {
        event.preventDefault();
        setUnit(celsius);
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    If (unit === "celsius") {
      rturn (
       <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</
        span>
        <span className="unit>
         ℃ |{" "}
          <a href="/" onClick={showFahrenheit}></a>
          °F
          <a/>
        </span>
      </div>
      );
    } else {
        return (
            <div className="weatherTemp">
                <span className="temp">{Math.round(props.fahrenheit)
                ()}</span>
                <span className="unit">
                    <a href="/" onClick={showClsius}>
                        ℃
                    </a>{" "}
                    | ℉
                </span>
                <div>
        );
    }
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
