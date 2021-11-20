function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


var today = new Date();
var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var dayOfWeek = weekday[today.getDay()];
var dayOfMonth = today.getDate();
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = dayOfWeek + ", " + dayOfMonth + " " + curMonth + ", " + curYear;

if (today.getDay() != 5) {
    document.getElementById("banner").style.display = "none"
}