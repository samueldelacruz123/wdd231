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

// Main grid for fetch and toggle views

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);

    document.querySelector("#grid").addEventListener("click", () => toggleView("grid"));
    document.querySelector("#list").addEventListener("click", () => toggleView("list"));
});

function displayMembers(members) {
    const container = document.querySelector("#members");
    container.innerHTML = "";

    members.forEach(member => {
        const section = document.createElement("section");

        section.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(section);
    });
}

function toggleView(view) {
    const container = document.querySelector("#members");
    container.className = view;
}