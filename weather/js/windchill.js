let temperature = parseFloat(document.getElementById("temperature").innerHTML)
let wind_speed = parseFloat(document.getElementById("wind-speed").innerHTML)
if (temperature <= 10 && wind_speed >= 5) {
    chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * temperature * Math.pow(wind_speed, 0.16)
    document.getElementById("chill").innerHTML = String(Math.trunc(chill))
}
else {
    document.getElementById("chill-value").innerHTML = "N/A"
}
