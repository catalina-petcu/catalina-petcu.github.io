let apiURL = "";
let  apiURLforecast = ""

if (document.title == "Preston") {
    apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
    apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
}
else if (document.title = "Soda Springs") {
    apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
    apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5607916&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
}
else if (document.title = "Fish Haven") {
    apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
    apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5585010&appid=6eaba2f545c31bd8f0b0bef8e9c804d2";
}

    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function convertToFahrenheit(temperature) {
        fahrenheit = (temperature - 273.15) * 9 / 5 + 32
        return fahrenheit
    }

    function getCurrentDate() {
        today_date = new Date();
        year = today_date.getYear() + 1900;
        month = today_date.getMonth() + 1;
        day = today_date.getDate();
        if (day < 10) {
            day = "0" + day
        }
        today = year + "-" + month + "-" + day;
        return today
    }

    function getDayOfWeek(day) {
        switch (day) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
            default:
                return "";
        }
    }

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log("something")
            console.log(jsObject)
            document.getElementById("temperature").innerHTML = capitalizeFirstLetter(jsObject.weather[0].description);
            document.getElementById("max-temperature").innerHTML = Math.round(convertToFahrenheit(parseFloat(jsObject.main.temp_max)));
            document.getElementById("humidity").innerHTML = jsObject.main.humidity + "%";
            document.getElementById("wind-speed").innerHTML = jsObject.wind.speed;
        });

    var temperatures = []
    var icons = []

    var index_in_forcast = 1;
    var day_of_week = new Date().getDay()


    today = getCurrentDate()
    console.log(today)
    fetch(apiURLforecast)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            jsObject.list.forEach((entry) => {
                if (String(entry.dt_txt).includes("18:00:00")) {
                    document.getElementById("day" + index_in_forcast).textContent = getDayOfWeek(day_of_week);
                    document.getElementById("day" + index_in_forcast + "-value").textContent = Math.round(convertToFahrenheit(parseFloat(entry.main.temp)))
                    const imagesrc = 'https://openweathermap.org/img/w/' + entry.weather[0].icon + '.png'; // note the concatenation
                    const desc = entry.weather[0].description; // note how we reference the weather array
                    document.getElementById("day" + index_in_forcast + "-img").textContent = imagesrc; // informational specification only
                    document.getElementById("day" + index_in_forcast + "-img").setAttribute('src', imagesrc); // focus on the setAttribute() method
                    document.getElementById("day" + index_in_forcast + "-img").setAttribute('alt', desc);
                    
                    
                
                    if (day_of_week == 6) {
                        day_of_week = 0;
                    }
                    else {
                        day_of_week += 1
                    }
                    index_in_forcast += 1;
                }
            })
        
        });

    let eventsAPI = "https://byui-cit230.github.io/weather/data/towndata.json"

    fetch(eventsAPI).then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject.towns)
            jsObject.towns.forEach((town) => {

                if (town.name == document.title) {
                    console.log(town.events)
                    town.events.forEach((value) => {
                        console.log(value)
                        paragraph = document.createElement("p")
                        paragraph.innerHTML = value
                        box = document.querySelector("#events-box")
                        box.appendChild(paragraph)
                    })
                }

            })
        });
