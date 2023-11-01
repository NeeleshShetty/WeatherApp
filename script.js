const apiKey = "974443d5df4542892968ebeb9b4e78ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        var data = await response.json();
        // console.log(data);
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    
        if(data.weather[0].main == "Mist"){
                weatherIcon.src = "Images/mist.png";
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/cloudy.png";
        }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/sunny.png";
        }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/heavyrain.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }
    
}

searchBtn.addEventListener('click',()=>{
    let cityName = searchBox.value;
    checkWeather(cityName);
})

