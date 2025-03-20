// Main grid for fetch and toggle views

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector("#members");

    if (!container) {
        console.error("Error: #members container not found!");
        return; // Stop execution if the element is missing
    }

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