const apiKey = '5fe36b192ffd1c36dffb6752bc1722b2';

async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return alert('Please enter a city name');



    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === '404') {
        alert('City not found');
        return;
    }

    // Display weather information
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('feels-like').textContent = `Feels like ${data.main.feels_like}°C`;
    document.getElementById('location').textContent = data.name;
    document.getElementById('date-time').textContent = new Date().toLocaleString();

    // Display additional weather details
    document.getElementById('country').textContent = data.sys.country;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;
    document.getElementById('pressure').textContent = data.main.pressure;
}