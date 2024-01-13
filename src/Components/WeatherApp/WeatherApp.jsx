import React from 'react'

import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import drizzeling_icon from "../Assets/drizzeling.png";
import clouds_icon from "../Assets/clouds.png";
import humidity_icon from "../Assets/humidity.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import sunny_icon from "../Assets/sunny.png";

const WeatherApp = () => {

    let api_key = "69e0b5d27fb1576fdd4080cd30be20fa";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&appid=${api_key}&units=metric`;




        let response = await fetch(url);
        let data = await response.json(JSON);

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.list[0].main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.list[0].wind.speed) + "Km/h";
        temprature[0].innerHTML = Math.floor(data.list[0].main.temp) + "°C";
        location[0].innerHTML = data.city.name;



    }


    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search"></input>
                <div className="search-icon" onClick={() => { search() }}>
                    <img className="search" src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img className="clouds" src={clouds_icon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img className="humidity icon" src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img className="wind icon" src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-rate">18KM/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherApp
