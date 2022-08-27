const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const DELAY_TIME = 1000;

btnStop.disabled = true;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, DELAY_TIME);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(intervalId);
});
