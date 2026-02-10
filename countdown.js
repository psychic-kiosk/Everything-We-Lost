

    function showMessage() {
        alert("your tickect to enter has not been given.");
    }

     // countdown.js
const countDownDate = new Date("May 27, 2026").getTime();

var x = setInterval(function() {
const now = new Date().getTime();
const distance = countDownDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownDays = document.getElementById("days");
        let countdownHours = document.getElementById("hours");
        let countdownMinutes = document.getElementById("minutes");
        let countdownSeconds = document.getElementById("seconds");
  
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
      
        countdownDays.innerHTML = '00';
        countdownHours.innerHTML = '00';
        countdownMinutes.innerHTML = '00';
        countdownSeconds.innerHTML = '00';
  }
}, 1000);
