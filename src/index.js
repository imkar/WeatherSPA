import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SearchApp } from './components/SearchApp';
import { WeatherApp } from './components/WeatherApp';
import "./index.css";



const App = () => {

    const [isLoaded,setIsLoaded] = useState(false);
/*     const [temp,setTemp] = useState();
    const [feelsLike,setFeelsLike] = useState();
    const [cityItem,setCityItem] = useState();
    const [weatherDescription,setWeatherDescription] = useState();
    const [icon,setIcon] = useState(); */
    const [box,setBox] = useState([]);
/*     const [searchResult,setSearchResult] = useState(""); */


    const fetchByCityName = async (item) => {
            
        const apiKey = "***REMOVED***";
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
        */

        setIsLoaded(true);
        setBox(box => 
            [...box,         
                {
                    temp: responseJson.main.temp,
                    feelsLike: responseJson.main.feels_like,
                    city: responseJson.name,
                    weatherDescription: responseJson.weather[0].main,
                    icon: responseJson.weather[0].icon,
                    isLoaded: true
                }
            ]
        );
        return responseJson;
    }
    
    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            console.log(e.target.value)
            const item = e.target.value;
            fetchByCityName(item)
            .catch((error) => {
                console.log(error.message);
            })
            e.target.reset();
        }
    }


    return (
        <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div>
            <h1 style={{textAlign:"center",margin:"50px"}}>Weather Single Page Application</h1>
            <SearchApp onKeyDown={handleOnKeyPress}/>
            <div className="outer-box background-div">
            
            {
                isLoaded && 
                box.map((item) => {
                        console.log(` map method: ${item.temp}`)
                        console.log(` map method: ${item.feelsLike}`)
                        console.log(` map method: ${item.city}`)
                        console.log(` map method: ${item.weatherDescription}`)
                        console.log(` map method: ${item.icon}`)
                        console.log(` map method: ${item.isLoaded}`)

                        return <WeatherApp 
                            temp={item.temp} 
                            feelsLike={item.feelsLike} 
                            city={item.city}
                            weatherDescription={item.weatherDescription}
                            icon={item.icon}
                            isLoaded={item.isLoaded}
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

