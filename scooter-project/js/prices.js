
const requestURL = "data/data.json";
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
            td4 = document.createElement("td");
            td4.innerHTML = rental["full-reservation"];
            tr.appendChild(td4);
            td5 = document.createElement("td");
            td5.innerHTML = rental["half-walk"];
            tr.appendChild(td5);
            td6 = document.createElement("td");
            td6.innerHTML = rental["full-walk"];
            tr.appendChild(td6);
            document.getElementById("table-body").appendChild(tr);
        });
    });