import React from 'react';
import "./WeatherApp.css";
import { ImageApp } from '../ImageApp';

const WeatherApp = (props) => {

    const toCelcius = (temperature) => {
        return Math.round(temperature - 273.15);
    }

    const currentDay = (city) => {
        let dateObj = new Date();
        
        return `${dateObj.getDate()}`
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
                <div className="button-box">
                    <button className="button-itself">X</button>
                </div>
                <ImageApp className="image-itself" val={props.icon} isLoaded={props.isLoaded}/>
            </div>
            <div className="info-box">
                <div className="celcius-box">
                    <h1>{toCelcius(props.temp)}<sup className="degree">°C</sup></h1>
                </div>
                <div className="name-box">
                    <p>{props.weatherDescription},</p>
                    <p>{props.city}</p>
                </div>
                <div className="date-box">
                    <p className="current-month">{currentMonth(props.city)}</p>
                    <p className="current-day">{currentDay()}</p>
                </div>
            </div>

            <div className="extra-box">
                <p>Feels like: {toCelcius(props.feelsLike)}<sup>°C</sup></p>
            </div>

        </div>
    )
}

export default WeatherApp;