var timer = document.getElementById("timer");

var toggleButton = document.getElementById("start-stop");
var resetButton = document.getElementById("reset");
toggleButton.addEventListener("click", ToggleTimer);
resetButton.addEventListener("click", ResetTimer);

var countdown = 0;
var currentSection = "Pomodoro";

// Start if countdown not running, stop if it's running.
function ToggleTimer()
{
    if (IsCountdownRunning())
        StopTimer()
    else
        StartTimer()
}

// Start the countdown
function StartTimer()
{
    if (IsCountdownRunning())
        return

    countdown = setInterval(() => {
        ChangeTimer(GetTime() - 1)
    }, 1000)

    toggleButton.className = "stop"
    toggleButton.innerHTML = "Stop"
}

// Stop the countdown
function StopTimer()
{
    if (IsCountdownRunning())
        clearInterval(countdown)
    
    countdown = 0
    document.title = "Pomodoro Clock"

    toggleButton.className = "start"
    toggleButton.innerHTML = "Start"
}
function ResetTimer()
{
    StopTimer()

    if (currentSection == "Pomodoro")
        timer.innerHTML = "25:00"
    else
        timer.innerHTML = "5:00"
}

// Change the display text
function ChangeTimer(newTime)
{
    if (newTime <= 0)
    {
        ChangeTimerText("0:00");
        StopTimer();
    }
    else
    {
        var text = TimeToText(newTime);
        ChangeTimerText(text);
    }
}

// Update Timer's text and document title.
function ChangeTimerText(text)
{
    timer.innerHTML = text;
    document.title = text;
}

function IsCountdownRunning()
{ return countdown > 0 }

// How many seconds left
function GetTime()
{ return TextToTime(timer.innerHTML) }

// Display text to seconds
// 10:00 to 600, for example.
function TextToTime(text)
{
    splitted = text.split(":")
    minutes = parseInt(splitted[0] * 60)
    seconds = parseInt(splitted[1])
    return minutes + seconds
}

// Seconds to display text.
// 600 to 10:00, for example.
function TimeToText(time)
{
    minutes = Math.floor(time / 60)
    seconds = time % 60

    if (seconds <= 9)
        seconds = "0" + seconds

    return minutes + ":" + seconds
}
