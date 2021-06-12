const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const COLOR_CHANGE_TIME = 1000;

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
};

refs.buttonStart.addEventListener('click', onButtonStart);
refs.buttonStop.addEventListener('click', onButtonStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColor(color) {
  refs.body.style.backgroundColor = color;
}

let timerColor = null;

function onButtonStart() {
  timerColor = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackgroundColor(colors[randomNumber]);
  }, COLOR_CHANGE_TIME);
  refs.buttonStart.setAttribute('disabled', true);
}

function onButtonStop() {
  clearInterval(timerColor);
  refs.buttonStart.removeAttribute('disabled');
}
