let date = new Date();
document.getElementById("currentyear").textContent = date.getFullYear();


var string = document.lastModified;
let oLastModif = new Date(document.lastModified);
let day = oLastModif.getMonth() + "/" + oLastModif.getDate() + "/" + oLastModif.getFullYear();
let hour = oLastModif.getHours() + ":" + oLastModif.getMinutes() + ":" + oLastModif.getSeconds();
//document.getElementById("lastmodified").textContent = day + " " + hour;
