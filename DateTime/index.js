let date = document.getElementById("date");
let getDate = new Date().toLocaleDateString();
date.innerHTML = getDate;

let time = document.getElementById("time");
setInterval(() => {
  let getTime = new Date().toLocaleTimeString();
  time.innerHTML = getTime;
});