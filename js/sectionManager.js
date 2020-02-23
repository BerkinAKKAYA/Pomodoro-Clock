var sectionButtons = document
    .getElementById("sections")
    .getElementsByTagName("button");

sectionButtons[0].addEventListener("click", ChangeSection)
sectionButtons[1].addEventListener("click", ChangeSection)

// Move between "Pomodoro" and "Break" sections
function ChangeSection()
{
    if (this.id == "active")
        return

    // Disable both then enable the clicked section
    sectionButtons[0].id = "";
    sectionButtons[1].id = "";
    this.id = "active";

    // Reset timer
    currentSection = this.innerHTML
    ResetTimer()
}
