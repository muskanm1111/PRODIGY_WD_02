window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;

  let appendMinutes = document.querySelector("#minutes");
  let appendtens = document.querySelector("#tens");
  let appendseconds = document.querySelector("#seconds");

  let startBtn = document.querySelector("#start");
  let stopBtn = document.querySelector("#stop");
  let resetBtn = document.querySelector("#reset");
  let interval;

  const startTimer = () => {
    tens++;
    if ((tens) => 9) {
      appendtens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendtens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;

      appendseconds.innerHTML = "0" + seconds;
      tens = 0;
      appendtens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendseconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;

      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendseconds.innerHTML = "0" + 0;
    }
  };

  startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  stopBtn.onclick = () => {
    clearInterval(interval);
  };
  resetBtn.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendtens.innerHTML = tens;
    appendseconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };
};
