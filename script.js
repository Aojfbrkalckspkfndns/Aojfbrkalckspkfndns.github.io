document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent?.classList.toggle('shift');
    });
} else {
    console.error('Hamburger button or sidebar element is missing.');
}

const navigationButtons = document.querySelectorAll('.sidebar .navigate');
    navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
const link = button.getAttribute('data-link');
if (link) {
    window.location.href = link;
}
});
    });

const toggleModeButton = document.getElementById('theme-toggle');
if (toggleModeButton) {
    toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
} else {
onsole.error('Theme toggle button not found.');
}

const aboutButton = document.querySelector('.sidebar .settings button[onclick="openAbout()"]');
if (aboutButton) {
    aboutButton.addEventListener('click', () => {
    alert('Thank you for visiting our website. This web system has been developed by the students of 11 ICT-Violet from Navotas National High School. We appreciate your interest and support. :)!');
});
}

const feedbackButton = document.getElementById("feedback-button");
if (feedbackButton) {
    feedbackButton.addEventListener("click", () => {
        window.location.href = "feedback.html";
    });
} else {
    console.error("Feedback button not found.");
}

feedbackButton.addEventListener("click", () => {
    window.open("feedback.html", "_blank");
});
