import React, {useState} from react;
export default function WeatherTemp(props) { 
        let fahrenheit = (props.celsius * 9)/ 5 + 32;
        return (
            <div className="weatherTemp">
                <span className="temp">{Math.round(props.fahrenheit)}</span>
                <span className="unit">
                  ℉
                  </span>
                </div>
                  );
}
