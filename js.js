let date = document.querySelector('.date');
date.textContent = currentDate();
let timee = document.querySelector('.time');

let city = document.querySelector('.citty');























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
	console.log(result);
} catch (error) {
	console.error(error);
}
}


fetchWeatherData('nairobi');


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