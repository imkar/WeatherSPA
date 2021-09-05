import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SearchApp } from './components/SearchApp';
import { WeatherApp } from './components/WeatherApp';
import "./index.css";



const App = () => {

    const [isLoaded,setIsLoaded] = useState(false);
    const [box,setBox] = useState([]);
    const [count,setCount] = useState(0);
    const [backgroundClass,setBackgroundClass] = useState('bg');
    const [backgroundClassSecond,setBackgroundClassSecond] = useState('bg bg2');
    const [backgroundClassThird,setBackgroundClassThird] = useState('bg bg3');


    const fetchByCityName = async (item) => {
            
        const apiKey = "YOUR_API_KEY";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const responseJson = await response.json();

        /*
        console.log(responseJson);
        console.log(responseJson.main);
        console.log(responseJson.weather[0].icon)
        console.log(responseJson.weather[0].id);
        */

        setIsLoaded(true);
        setCount(count+1);
        setBox(box => 
            [...box,         
                {
                    temp: responseJson.main.temp,
                    feelsLike: responseJson.main.feels_like,
                    city: responseJson.name,
                    weatherDescription: responseJson.weather[0].main,
                    icon: responseJson.weather[0].icon,
                    weatherId: responseJson.weather[0].id,
                    isLoaded: true,
                    count: count
                }
            ]
        );
        return responseJson;
    }
    
    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            const item = e.target.value;
            fetchByCityName(item)
            .catch((error) => {
                console.log(error.message);
            })
        }
    }

    const handleRemove = (e) => {
        const itemNum = e.target.getAttribute('data-key');
        const newBox = box.filter(item => item.count !== parseInt(itemNum));
        setBox(newBox);
    }   

    const findIdForWeather = (id) => {
        // Sunny
        if (id === '01d' || id === '02d' || id === '03d') {
            return 'bg-sunny';
        }
        // Night
        else if (id === '01n' || id === '03n' || id === '02n'){
            return 'bg-night';
        }
        // Clouds
        else if (id === '04d' || id === '04n'){
            return 'bg';
        }
        // Rainy
        else if (id === '09d' || id === '09n' || id === '10d' || id === '10n'){
            return 'bg-rainy';
        }
        // Thunderstorm
        else if (id === '11d' || id === '11n'){
            return 'bg-thunderstorm';
        }
        // Snowy
        else if (id === '13d' || id === '13n'){
            return 'bg-snowy';
        }
        // Foggy
        else if (id === '50d' || id === '50n'){
            return 'bg-foggy';
        }
        // default
        else {
            return 'bg';
        }
    }

    const handleHover = (e) => {
        // console.log(e);
        const itemNum = e.currentTarget.getAttribute('data-key');
        // console.log(`itemNum ==> ${itemNum}`)
        const foundBox = box.filter(x => x.count === parseInt(itemNum));
        // console.log(foundBox[0].icon);
        const foundId = findIdForWeather('' + foundBox[0].icon);
        // console.log(foundId)
        setBackgroundClass(foundId);
        // console.log(foundId + ' bg2')
        setBackgroundClassSecond(foundId + ' bg2');
        setBackgroundClassThird(foundId + ' bg3');
    }

    return (
        
        <div>
            <div className={backgroundClass}></div>
            <div className={backgroundClassSecond}></div>
            <div className={backgroundClassThird}></div>
            <div>
                <div className="header-style">
                    <h1>Daily Weather</h1>
                </div>
                <SearchApp onKeyDown={handleOnKeyPress}/>
                <div className="outer-box background-div">
                
                {
                    isLoaded && 
                    box.map((item) => {
                            /*
                            console.log(` map method: ${item.temp}`)
                            console.log(` map method: ${item.feelsLike}`)
                            console.log(` map method: ${item.city}`)
                            console.log(` map method: ${item.weatherDescription}`)
                            console.log(` map method: ${item.icon}`)
                            console.log(` map method: ${item.isLoaded}`)
                            console.log(` map method: ${item.count}`)
                            */
                            return <WeatherApp 
                                temp={item.temp} 
                                feelsLike={item.feelsLike} 
                                city={item.city}
                                weatherDescription={item.weatherDescription}
                                icon={item.icon}
                                isLoaded={item.isLoaded}
                                handleRemove={handleRemove}
                                keyid={item.count}
                                handleHover={handleHover}
                            />;
                        }
                    )
                }
                </div>
            </div>
        </div>

    )

};



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

