"use strict"

//e47b1e1a9e7087ab1a7842173477c04c

const API_KEY = "e47b1e1a9e7087ab1a7842173477c04c";

document.addEventListener('DOMContentLoaded', () => {
    let weather = document.querySelector("#weather");
    weather.addEventListener('submit', event => {
        event.preventDefault();
        WeatherInfo(document.querySelector('#results'), weather);
    }, false);
});

const results = document.querySelector("#results");
const WeatherInfo = async (results, weather) => {
    try {
        let cityinput = weather.querySelector("#city").value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput}&appid=${API_KEY}`
        let response = await request(url);
        results.innerText = JSON.stringify(response);
    } catch (error) {
        console.log(error);
    }
};

const request = url => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
               reject({
                error:500
               });
            };
        });
    });
};