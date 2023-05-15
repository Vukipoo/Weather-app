const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('#search-btn')

function weather(){
fetch(`http://api.weatherapi.com/v1/forecast.json?key=7b66928e345640c1b66213424231405&q=${searchBar.value}`)
.then(function(response) {
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log(response.current.condition)
    console.log(response.current.temp_f)
    console.log(response.current.feelslike_f)
    console.log(response.current.wind_mph)
    console.log(response.current.humidity)
    document.querySelector('.condition').textContent = response.current.condition.text
    document.querySelector('.degrees').textContent = response.current.temp_f
    document.querySelector('.feels-like').textContent = `Feels like: ${response.current.feelslike_f}`
    document.querySelector('.wind-mph').textContent = `Wind speed: ${response.current.wind_mph} mph`
    document.querySelector('.humidity').textContent = `Humidity: ${response.current.humidity}`
    document.querySelector('.location').textContent = searchBar.value
})
}



searchBtn.addEventListener('click', () => {
    weather()
})






