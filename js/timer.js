const display = document.getElementById("timer");
const toggleButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");

toggleButton.addEventListener("click", Toggle);
resetButton.addEventListener("click", Reset);

let startedAt = 0;
let elapsed = 0;
let running = false;
let targetMinutes = 25;

function Toggle()
{
    if (running) Stop();
    else         Start();
}
function Start()
{
    startedAt = Date.now();
    toggleButton.className = "stop"
    toggleButton.innerHTML = "Stop"
    running = true;
}
function Stop()
{
    elapsed += parseInt((Date.now() - startedAt) / 1000);
    document.title = "Pomodoro Clock"
    toggleButton.className = "start"
    toggleButton.innerHTML = "Start"
    running = false;
}
function Reset()
{
    Stop();
    elapsed = 0;
    display.innerHTML = targetMinutes + ":00";
}

function Update()
{
    if (!running)
        return;

    const targetSeconds = targetMinutes * 60;
    const diff = parseInt((Date.now() - startedAt) / 1000);
    const timeLeft = targetSeconds - (elapsed + diff);

    if (timeLeft == 0)
        Reset();

    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);
    if (seconds <= 9) seconds = "0" + seconds;

    display.innerHTML = minutes + ":" + seconds;
}

setInterval(Update, 1000);