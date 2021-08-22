import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SearchApp } from './components/SearchApp';
import { WeatherApp } from './components/WeatherApp';
import "./index.css";



const App = () => {

    const [isLoaded,setIsLoaded] = useState(false);
    const [box,setBox] = useState([]);
    const [count,setCount] = useState(0);

    const fetchByCityName = async (item) => {
            
        const apiKey = "";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const responseJson = await response.json();


        console.log(responseJson);
        console.log(responseJson.main);
        console.log(responseJson.weather[0].icon)


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

    return (

        <div>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div>
                <div className="header-style">
                    <h1>Weather Single Page Application</h1>
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

