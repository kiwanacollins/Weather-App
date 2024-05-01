let date = document.querySelector('.date');
date.textContent = currentDate();
let timee = document.querySelector('.time');
let data;
let displayTemp = document.getElementById('temp');
let weather = document.getElementById('weather2');;
let weatherImage = document.getElementById('weather-img');


async function fetchWeatherData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07f422dcf0msh683de365a04eae1p166dc5jsn2f74f8e616c5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    data = JSON.parse(result);
	console.log(data);
    let cityTemperature = `${data.feels_like}°C`;
    displayTemp.textContent = cityTemperature;
    // 

    let condition;
    if (data.feels_like <= 10) {
        condition = "Rainy";
        const img = document.createElement('img');
        img.src = './rain.png';
        weatherImage.innerHTML = '';
        weatherImage.appendChild(img);
        img.classList.add('weather-iconz');
    } else if (data.feels_like > 10 && data.feels_like <= 25) {
        condition = "Cloudy";
        const img = document.createElement('img');
        img.src = './cloud.png';
        weatherImage.innerHTML = '';
        weatherImage.appendChild(img);
        img.classList.add('weather-iconz');
    } else {
        condition = "Sunny";
        const img = document.createElement('img');
        img.src = './sun.png';
        weatherImage.innerHTML = '';
        weatherImage.appendChild(img);
        img.classList.add('weather-iconz');
    }
    weather.textContent = condition;
  
    

} catch (error) {
	console.error(error);
}
}

document.getElementById("inputt").addEventListener("input", function() {

    let inputVal = this.value;
    if (this.value.length === 1) { // Check if the input is the first character
        this.value = this.value.charAt(0).toUpperCase(); // Capitalize it
    }

  
    // Corrected way to capitalize the first letter
    let inputVal2 = inputVal.charAt(0).toUpperCase() + inputVal.slice(1);
    let city = document.querySelector('.citty');
    city.textContent = inputVal2; // Now correctly updates with capitalized input
    fetchWeatherData(inputVal); // Assuming you want to fetch data with the original input
});


function currentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updater() {
    setInterval(function() {
        let currentTime = updateTime();
        timee.textContent = currentTime;
    }, 1000);
}
updater();

