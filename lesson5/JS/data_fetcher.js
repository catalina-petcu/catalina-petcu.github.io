const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
       
        const towns = jsonObject['towns'];
        towns.forEach((town) => {
            var article = "";
             console.log(town)
            switch (town.name) {
                case "Preston":
                    article = document.getElementById("preston");
                    break;
                case "Soda Springs":
                    article = document.getElementById("soda-springs");
                    break;
                case "Fish Haven":
                    article = document.getElementById("fish-haven");
                    break;
                default:
                    break;
            }
            if (article != "") {
                article.querySelector(".name").innerHTML = town.name
                article.querySelector(".motto").innerHTML = town.motto
                article.querySelector(".year").innerHTML = "Year Founded: " + town.yearFounded
                article.querySelector(".population").innerHTML = "Population: " + town.currentPopulation
                article.querySelector(".rain").innerHTML = "Annual Rain Fall: " + town.averageRainfall
            }

        })
    });