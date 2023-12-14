document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '2b767bae393ae7e90bc4843aff5ee515';
  
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const weatherInfo = document.getElementById('weatherInfo');
  
    // Function to convert temperature from Kelvin to Celsius
    function kelvinToCelsius(kelvin) {
      return (kelvin - 273.15).toFixed(2); 
    }
  
    // Function to fetch and display weather data
    function getWeatherData(city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const temperatureKelvin = data.main.temp;
          const description = data.weather[0].description;
  
          // Convert temperature from Kelvin to Celsius
          const temperatureCelsius = kelvinToCelsius(temperatureKelvin);
  
          // Update the HTML with weather information
          weatherInfo.innerHTML = `
            <p>Temperature: ${temperatureCelsius}°C</p>
            <p>Conditions: ${description}</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          // Display an error message to the user
          weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
        });
    }
  
    // Added an event listener to the search button
    searchButton.addEventListener('click', () => {
      const location = locationInput.value;
      getWeatherData(location);
    });
  });
  