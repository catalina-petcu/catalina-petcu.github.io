
const requestURL = "https://catalina-petcu.github.io/scooter-project/data/data.json";
fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {console.log(data)
        data.rentals.forEach((rental, index) => {
            console.log(rental)
            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td1.innerHTML = rental.name;
            tr.appendChild(td1);
            td2 = document.createElement("td");
            td2.innerHTML = rental.persons;
            tr.appendChild(td2);
            td3 = document.createElement("td");
            td3.innerHTML = rental["half-reservation"];
            tr.appendChild(td3);
            document.getElementById("table-body").appendChild(tr);
        });
    });