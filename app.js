//API_KEY = 09b5f262144a058f65a9c1820bee5462
// /https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}


const form = document.querySelector('form');
const weatherDetails = document.querySelector('.weather-container');



form.addEventListener('submit', e => {
  e.preventDefault();

  //city na itatype sa input
  const city = form.city.value;

  //after mag type, reset sya.
  form.reset()

  //kukunin ang itatype sa input na city at ipapasa sa getCityandWeather function
  getCityandWeather(city);

  weatherDetails.style.display = 'block'


})



//Fetch the data
const getCityandWeather = async (city) => {

  const API_KEY = '09b5f262144a058f65a9c1820bee5462'

  
  try {
    //get data
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    const response = await fetch(URL);
    //aralin bukas
    // if (!response.ok) {
    //   alert("No weather found.");
    //   throw new Error("No weather found.");
    // }
    const data = await response.json();
    //pass the data to displayWeather function
    displayWeather(data);

  
  } catch(error) {
      alert('Invalid Keyword')    
  }
}


//Display the weather details
function displayWeather(data) {

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
  weatherIconItem.setAttribute('data-aos', 'zoom-in');
  weatherIconItem.appendChild(weatherIcon);
 

  // Create the HTML content for the weather details
  let html = ` 
    <li data-aos="fade-right"
    class="left">Temperature - ${temp}°C<img src="img/temperature.png" class="temp"</li>
    
    <li data-aos="fade-left"
    class="left">Wind Speed - ${data.wind.speed} km/h<img src="img/wind.png" class="humidity"</li>

    <li data-aos="fade-right"
    class="left">Humidity - ${data.main.humidity}%<img src="img/humidity.png" class="humidity"></li>

    <li data-aos="fade-left"
    class="left">${data.weather[0].main}</li>

    <h1 data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="city-name">${data.name}</h1>`;

    // Clear the existing content of the weather container
    weatherDetails.innerHTML = '';

    // Append the weather icon item and other details to the weather container
    weatherDetails.appendChild(weatherIconItem);
    weatherDetails.innerHTML += html;
}



  
