const profileName = document.getElementById("name").innerHTML = "Simon Chukwuebuka"
const myTrack = document.getElementById("track").innerHTML = "Frontend"

//Show current day
const date = new Date();
const weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = document.getElementById("day").innerHTML = weekday[date.getDay()]
//document.getElementById("day").innerHTML = currentDay.getDay();

//Get UTC time first function
function time() {
    const d = new Date()
    let h = d.getUTCHours()
    let m = d.getUTCMinutes()
    let s = d.getUTCSeconds()

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("time").innerHTML = `${h}:${m}:${s}`
    setTimeout(time, 1000)
}
time()
/*
function pad(n) {
  return String(n).length === 1 ? `0${n}`: n;
}

function time() {

    const d = new Date();

    const h = d.getUTCHours()
    const m = d.getUTCMinutes()
    const s = d.getUTCSeconds()

    document.getElementById("time").innerHTML = `${pad(h)}:${pad(m)}:${pad(s)}`
    setTimeout(time, 1000);

}

time();
*/