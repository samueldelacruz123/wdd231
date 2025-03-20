// Display the last modification date
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("lastModified");

    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModified.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }
});

// Hamburger button
const hamburgerElement = document.querySelector('#hamburger');
const navElement = document.querySelector('.mainMenuLinks');

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});