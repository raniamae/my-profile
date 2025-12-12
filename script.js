//A. CHANGE THEME
const button = document.getElementById("darkmode");

// Check if dark mode was previously saved
if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
}

button.onclick = function () {
    if (document.body.classList.contains("dark")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
};

function enableDarkMode() {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    button.textContent = "Switch to Light Mode";
}

function disableDarkMode() {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    button.textContent = "Toggle Dark Mode";
}

//B. EDIT JOB
const editBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementsByClassName("title")[0];
editBtn.addEventListener('click', editJobTitle );

function editJobTitle() {
    const currentTitle= jobTitle.textContent;
    const newTitle= prompt("Enter new job title: ", currentTitle);

    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle.trim();
        console.log("Job title updated!" + newTitle.trim());
    } else if (newTitle !== null) {
        alert("Please input new job title.");
    } else {
        console.log("Update cancelled.");
    }
}

//C. HIDE/SHOW SKILLS BUTTON
const skillsBtn = document.getElementById("toggleSkillsBtn");
const skillsList = document.getElementById("skillsList");
skillsBtn.addEventListener('click', skillsVisibility);

function skillsVisibility() {
    const isHidden =skillsList.classList.contains('hidden');

    if (isHidden) {
        skillsList.classList.remove('hidden');
        skillsBtn.textContent = "Hide skills";
        console.log("Skills shown");
    } else {
        skillsList.classList.add('hidden');
        skillsBtn.textContent = "Show skills";
        console.log("Skills hidden");
    }
}

//D. LIVE CHARACTER COUNTER
document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('msgBox');
    const counterSpan = document.getElementById('counter');

    const maxLength = parseInt(messageBox.getAttribute('maxlength'));
    const updateCharacterCount = () => {
    const currentLength = messageBox.value.length;
    const charactersLeft = maxLength - currentLength;
   
    counterSpan.textContent = charactersLeft;
}
messageBox.addEventListener('input', updateCharacterCount);
updateCharacterCount();
});

//E. FORM VALIDATION SENDING
function validateForm() {
    const nameInput = document.getElementById('nameField');
    const emailInput = document.getElementById('emailField');
    const messageBox = document.getElementById('msgBox');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageBox.value.trim();

    if (nameValue === "" || emailValue === "" || messageValue === "" ) {
        alert("Please fill out Name, Email, and Text box");
        return false;
    }
    alert("Message submitted.")
    return window.location.reload();
}

//F. DATE AND TIME
function updateDateandTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    const dateTime = document.getElementById("dateTime");
    
    if (dateTime) {
        dateTime.textContent = formattedDateTime;
    }
}
updateDateandTime();
setInterval(updateDateandTime, 1000);

//G. 
document.addEventListener('DOMContentLoaded', () => {
    const greetings = document.getElementById('greetingMessage');

    function displayGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting ="";

        if (hour < 12) {
            greeting = "Good morning, User!";
        } else if (hour < 18) {
            greeting = "Good afternoon, User!";
        } else {
            greeting = "Good evening, User!";
        }
    greetings.textContent = greeting;
    }
    displayGreeting();
});
