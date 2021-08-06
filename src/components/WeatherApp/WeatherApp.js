import React from 'react';
import "./WeatherApp.css";
import { ImageApp } from '../ImageApp';

const WeatherApp = (props) => {
    return (
        <div className="inner-box">
            <ul>
                <li>City: {props.cityName}</li>
                <li>Temperature: {props.temp}</li>
                <li>Feels like: {props.feelsLike}</li>
                <li>Main: </li>
                <ImageApp val={props.weatherDescription}/>
            </ul>
        </div>
    )
}

export default WeatherApp;