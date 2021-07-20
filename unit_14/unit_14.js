const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "43cbfc990dd34289f4d9c9f255dbac38"
}

const cities = {
    2643743: "London",
    625144: "Minsk",
    524894: "Moscow",
    703446: "Kyiv"
}

function citiesList() {
    let select = document.querySelector('#city');
    for (i in cities) {
        let elem = document.createElement('option');
        elem.innerHTML = cities[i];
        elem.value = i;
        select.appendChild(elem);
    }
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.disclaimer').innerHTML = data.weather[0].main
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

}

citiesList();
getWeather();
document.querySelector('#city').onchange = getWeather;