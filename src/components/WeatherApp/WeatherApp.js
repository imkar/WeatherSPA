import React from 'react';
import "./WeatherApp.css";
import { ImageApp } from '../ImageApp';

const WeatherApp = (props) => {

    const toCelcius = (temperature) => {
        return parseInt(temperature / 10);
    }

    const currentDay = () => {
        let dateObj = new Date();
        return `${dateObj.getDay()}`
    }

    const currentMonth = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dateObj = new Date();
        return `${monthNames[dateObj.getMonth()]}`
    }
    return (
        <div className="inner-box">
            <div className="image-box">
                <ImageApp className="image-itself" val={props.weatherDescription}/>
            </div>
            <div className="info-box">
                <div className="celcius-box">
                    <h1>{toCelcius(props.temp)}<sup>&#8451;</sup></h1>
                </div>
                <div className="name-box">
                    <p>{props.weatherDescription}</p>
                    <p>{props.cityName}</p>
                </div>
                <div className="date-box">
                    <p>{currentDay()}</p>
                    <p>{currentMonth()}</p>
                </div>
            </div>

            <div className="extra-box">
                <p>Feels like: {toCelcius(props.feelsLike)}<sup>&#8451;</sup></p>
            </div>

        </div>
    )
}

export default WeatherApp;