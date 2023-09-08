const profileName = document.getElementById("name");
profileName.innerHTML= "Simon Chukwuebuka";

//Show current day
const date = new Date();
const weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = document.getElementById("day").innerHTML = weekday[date.getDay()]
//document.getElementById("day").innerHTML = currentDay.getDay();

//Get UTC time
const hours = date.getUTCHours()
const minutes = date.getUTCMinutes()
const seconds = date.getUTCSeconds()
document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`