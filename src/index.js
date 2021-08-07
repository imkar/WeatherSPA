import React from 'react';
import ReactDOM from 'react-dom';
import { WeatherApp } from './components/WeatherApp';
import "./index.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            temp: "",
            feelsLike: "",
            cityName: "",
            weatherDescription: ""
        }
    }


    componentDidMount() {
        const apiKey = "";
        const cityName = "Istanbul"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        
        const fetchByCityName = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const responseJson = await response.json();
            console.log(responseJson);
            console.log(responseJson.main);
            this.setState({
                isLoaded: true,
                temp: responseJson.main.temp,
                feelsLike: responseJson.main.feels_like,
                cityName: responseJson.name,
                weatherDescription: responseJson.weather[0].main
            });
            return responseJson;
        }

        fetchByCityName()
            .catch((error) => {
                console.log(error.message);
            })
    }
    
    render() {
        
        return (
            <div>
                <h1 style={{textAlign:"center",margin:"50px"}}>Weather Single Page Application</h1>
                <div className="outer-box">
                    { 
                    this.state.isLoaded && 
                        <WeatherApp 
                            temp={this.state.temp} 
                            feelsLike={this.state.feelsLike} 
                            cityName={this.state.cityName}
                            weatherDescription={this.state.weatherDescription}
                        />
                    }
                                        { 
                    this.state.isLoaded && 
                        <WeatherApp 
                            temp={this.state.temp} 
                            feelsLike={this.state.feelsLike} 
                            cityName={this.state.cityName}
                            weatherDescription={this.state.weatherDescription}
                        />
                    }
                                        { 
                    this.state.isLoaded && 
                        <WeatherApp 
                            temp={this.state.temp} 
                            feelsLike={this.state.feelsLike} 
                            cityName={this.state.cityName}
                            weatherDescription={this.state.weatherDescription}
                        />
                    }
                                        { 
                    this.state.isLoaded && 
                        <WeatherApp 
                            temp={this.state.temp} 
                            feelsLike={this.state.feelsLike} 
                            cityName={this.state.cityName}
                            weatherDescription={this.state.weatherDescription}
                        />
                    }
                </div>
            </div>

        )
    }


}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

