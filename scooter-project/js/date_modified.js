function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


var string = document.lastModified;
let oLastModif = new Date(document.lastModified);
let day = (oLastModif.getMonth() + 1) + "/" + oLastModif.getDate() + "/" + oLastModif.getFullYear();
let hour = oLastModif.getHours() + ":" + oLastModif.getMinutes() + ":" + oLastModif.getSeconds();
document.getElementById("lastModified").innerHTML = day + " " + hour;