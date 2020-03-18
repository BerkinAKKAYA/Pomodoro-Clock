const sectionButtons = document.querySelectorAll("#sections button");
sectionButtons[0].addEventListener("click", ChangeSection)
sectionButtons[1].addEventListener("click", ChangeSection)

function ChangeSection()
{
    if (this.id == "active")
        return

    sectionButtons[0].id = "";
    sectionButtons[1].id = "";
    this.id = "active";

    if (this.innerHTML == "Pomodoro")
        targetMinutes = 25;
    else
        targetMinutes = 5;
    
    Reset();
}