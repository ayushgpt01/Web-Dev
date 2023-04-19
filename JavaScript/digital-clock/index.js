const time = document.querySelector(".time");
const date = document.querySelector(".date");
const day = document.querySelector(".day");

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.setInterval(() => {
  const localTime = new Date();
  const hh = localTime.getHours();
  const mm = localTime.getMinutes();
  const ss = localTime.getSeconds();

  time.innerText = `${hh}:${mm}:${ss}`;

  const d = localTime.getDate();
  const m = localTime.getMonth();
  const y = localTime.getFullYear();

  date.innerText = `${d}-${m + 1}-${y}`;

  day.innerText = week[localTime.getDay()];
}, 1000);
