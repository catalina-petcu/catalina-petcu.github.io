

const requestURL = "data/data.json"
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const info = jsonObject;
        for (let i = 0; i < prophets.length; i++) {
            console.log(info["Rental Type"])
        }
    });