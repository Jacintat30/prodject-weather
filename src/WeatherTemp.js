import React, {useState} from react;
export default function WeatherTemp(props) { 
        return (
            <div className="weatherTemp">
                <span className="temp">{Math.round(fahrenheit)}</span>
                <span className="unit">℉</span>
                </div>
                  );
}
