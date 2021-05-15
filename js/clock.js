let name = document.querySelector("#myName");
let ask = prompt("İsminiz : ");

myName.innerHTML = ask.length >= 0 ? ask : "";

var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function showTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var t_str = hours + ":" + minutes + ":" + sec + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.querySelector("#myClock").textContent = t_str;
  setTimeout(showTime, 1000);
}

showTime();

function days() {
  var date = new Date();
  var d = date.getDay();

  switch (d) {
    case 0:
      d = "Pazar";
      break;

    case 1:
      d = "Pazartesi";
      break;

    case 2:
      d = "Salı";
      break;

    case 3:
      d = "Çarşamba";
      break;

    case 4:
      d = "Perşembe";
      break;

    case 5:
      d = "Cuma";
      break;

    case 6:
      d = "cumartesi";
      break;
  }
  document.querySelector("#days").innerText = d;

  setTimeout(days, 1000);
}

days();
