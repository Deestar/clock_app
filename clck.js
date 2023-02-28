let firstCircle = document.querySelector("#fc");
let secondCircle = document.querySelector("#sc");
let thirdCircle = document.querySelector("#tc");

let analoghr = document.querySelector(".hrs");
let analogmn = document.querySelector(".mins");
let analogsc = document.querySelector(".sec");
let analogpd = document.querySelector(".pd");

let date = new Date();
setInterval(() => {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = Math.floor((date.getSeconds() / 5) * 30);
  firstCircle.style.transform = `rotate(${Math.floor(hh + mm / 12)}deg)`;
  secondCircle.style.transform = `rotate(${mm}deg)`;

  thirdCircle.style.transform = `rotate(${ss}deg)`;

  if (date.getHours() > 12) {
    analogpd.innerHTML = "pm";
    let Newhh = date.getHours() - 12;
    if (Newhh >= 10) {
      analoghr.innerHTML = Newhh;
    } else {
      analoghr.innerHTML = "0" + Newhh;
    }
  } else {
    analogpd.innerHTML = "am";

    analoghr.innerHTML = "0" + date.getHours();
  }

  if (date.getMinutes() < 10) {
    analogmn.innerHTML = `0${date.getMinutes()}`;
  } else {
    analogmn.innerHTML = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    analogsc.innerHTML = `0${date.getSeconds()}`;
  } else {
    analogsc.innerHTML = date.getSeconds();
  }
}, 0);
