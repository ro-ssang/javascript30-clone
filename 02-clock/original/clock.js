const secondHand = document.querySelector(".js-second-hand");
const minuteHand = document.querySelector(".js-minute-hand");
const hourHand = document.querySelector(".js-hour-hand");

const midnight = new Date();
midnight.setHours(0, 0, 0);

function setHandsPosition(hourDeg, minDeg, secDeg) {
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
}

function getHandsDegree() {
  const now = new Date();
  const elapsedTime = (now - midnight) / 1000;
  const secondsDegrees = (360 / 60) * elapsedTime;
  const minutesDegrees = (360 / (60 * 60)) * elapsedTime;
  const hoursDegrees = (360 / (12 * 60 * 60)) * elapsedTime;
  setHandsPosition(hoursDegrees, minutesDegrees, secondsDegrees);
}

function init() {
  getHandsDegree();
  setInterval(getHandsDegree, 1000);
}

init();
