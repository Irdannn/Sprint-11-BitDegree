"use strict"

fetch("https://api.openweathermap.org/data/2.5/weather?q=manchester&units=metric&APPID=e47b1e1a9e7087ab1a7842173477c04c")
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));