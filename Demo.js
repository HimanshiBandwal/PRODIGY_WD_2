let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('timer');
const laps = document.getElementById('laps');

function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    display.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = '00 : 00 : 00 : 00';
    laps.innerHTML = '';
}

function restart() {
    reset();
    start();
}

function lap() {
    if (isRunning) {
        const lapTime = display.textContent;
        const li = document.createElement('li');
        li.textContent = lapTime;
        laps.appendChild(li);
    }
}

function resetLap() {
    laps.innerHTML = '';
}




/*let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const timerDisplay = document.getElementById('timer');
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
    timerDisplay.textContent = 
        `${hours.toString().padStart(2, '0')} : 
         ${minutes.toString().padStart(2, '0')} : 
         ${seconds.toString().padStart(2, '0')} : 
         ${milliseconds.toString().padStart(2, '0')}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function reset() {
    running = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    lapsContainer.innerHTML = '';
}

function restart() {
    reset();
    start();
}

function lap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = timerDisplay.textContent;
        lapsContainer.appendChild(lapTime);
    }
}

function resetLap() {
    lapsContainer.innerHTML = '';
}

updateDisplay();*/
