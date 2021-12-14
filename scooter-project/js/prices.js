
const requestURL = "https://github.com/catalina-petcu/catalina-petcu.github.io/blob/master/scooter-project/data/data.json"
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
    });