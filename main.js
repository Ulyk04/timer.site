// Объявляем переменные для элементов страницы
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var timerDisplay = document.getElementById("h1");

// Объявляем переменные для управления таймером
var intervalId;
var seconds = 0;
var minutes = 0;
var hours = 0;

// Функция для запуска таймера
function startTimer() {
    intervalId = setInterval(updateTimer, 1000); // Вызываем updateTimer каждую секунду (1000 миллисекунд)
    startButton.disabled = true; // Делаем кнопку "Start" неактивной
}

// Функция для остановки таймера
function stopTimer() {
    clearInterval(intervalId); // Останавливаем таймер
    startButton.disabled = false; // Включаем кнопку "Start"
}

// Функция для сброса таймера
function resetTimer() {
    stopTimer(); // Останавливаем таймер, если он запущен
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay(); // Обновляем отображение таймера
}

// Функция для обновления отображения таймера
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay(); // Обновляем отображение таймера
}

// Функция для форматирования и обновления отображения времени
function updateDisplay() {
    var formattedTime = padNumber(hours) + " : " + padNumber(minutes) + " : " + padNumber(seconds);
    timerDisplay.textContent = formattedTime;
}

// Функция для добавления ведущего нуля к числу, если оно меньше 10
function padNumber(number) {
    return (number < 10) ? "0" + number : number;
}
