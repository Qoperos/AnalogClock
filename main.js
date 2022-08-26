const hours = document.querySelector('.hour');
const minS = document.querySelector('.minute');
const secondS = document.querySelector('.second');

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();


    const hourDeg = (hour / 12) * 360;
    hours.style.transform = `rotate(${hourDeg}deg)`;

    const minDeg = (min / 60) * 360;
    minS.style.transform = `rotate(${minDeg}deg)`;
   
    const secDeg = (sec / 60) * 360;
    secondS.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);