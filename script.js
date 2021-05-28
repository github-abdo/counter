const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minsEl=document.getElementById('mins')
const secondsEl=document.getElementById('seconds')









const Ramadan = "2 april 2022 ";
function countdown(){

const Ram  = new Date(Ramadan);
const currentDate = new Date();
const totalSeconds = (Ram - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const second = Math.floor(totalSeconds) % 60;



daysEl.innerHTML=days;
 hoursEl.innerHTML = hours;
 minsEl.innerHTML = mins;
 secondsEl.innerHTML = second;

}





//initail call
countdown();
setInterval(countdown, 1000);