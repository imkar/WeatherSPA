import React from 'react';
import "./WeatherApp.css";

const WeatherApp = (props) => {
    return (
        <div className="inner-box">
            <ul>
                {/* <img src={props.image}></img> */}
                <li>City: {props.cityName}</li>
                <li>Temperature: {props.temp}</li>
                <li>Feels like: {props.feelsLike}</li>
            </ul>
        </div>
    )
}

export default WeatherApp;