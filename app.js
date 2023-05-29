//API_KEY = 09b5f262144a058f65a9c1820bee5462
// /https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}


const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  //city na itatype sa input
  const city = form.city.value;

  //after mag type, reset sya.
  form.reset()

  //kukunin ang itatype sa input na city at ipapasa sa getCityandWeather function
  getCityandWeather(city);

  
})



//Fetch the data
const getCityandWeather = async (city) => {

  const API_KEY = '09b5f262144a058f65a9c1820bee5462'

  

  try {
    //get data
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    const response = await fetch(URL);
    const data = await response.json();
    //pass the data to displayWeather function
    displayWeather(data);

  
  } catch(error) {
     document.querySelector('.error-mesage').innerHTML = error;    
  }
}


//Display the weather details
function displayWeather(data) {

  const weatherDetails = document.querySelector('.weather-container');
  const temp = Math.round(data.main.temp);
  let weatherIcon = document.querySelector('.weather-icon');

  if (data.weather[0].main === 'Clouds') {
    weatherIcon.src = 'img/clouds.png';
  } else if (data.weather[0].main === 'Clear') {
    weatherIcon.src = 'img/clear.png';
  } else if (data.weather[0].main === 'Rain') {
    weatherIcon.src = 'img/rainy.png';
  } else if (data.weather[0].main === 'Drizzle') {
    weatherIcon.src = 'img/drizzle.png';
  } else if (data.weather[0].main === 'Mist') {
    weatherIcon.src = 'img/mist.png';
  }

  // Create a new li element for the weather icon
  const weatherIconItem = document.createElement('li');
  weatherIconItem.appendChild(weatherIcon);
 

  // Create the HTML content for the weather details
  let html = ` 
    <li class="left">Temperature - ${temp}°C<img src="img/temperature.png" class="temp"</li>
    <li class="left">Wind Speed - ${data.wind.speed}<img src="img/wind.png" class="humidity"</li>
    <li class="left">Humidity - ${data.main.humidity}%<img src="img/humidity.png" class="humidity"></li>
    <li class="left">${data.weather[0].description}</li>
    <h1 class="city-name">${data.name}</h1>`;

    // Clear the existing content of the weather container
    weatherDetails.innerHTML = '';

    // Append the weather icon item and other details to the weather container
    weatherDetails.appendChild(weatherIconItem);
    weatherDetails.innerHTML += html;
}



  
