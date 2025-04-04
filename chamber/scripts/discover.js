document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    const visitMessage = document.getElementById("visit-message");

    // Visit Message Logic
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = now - parseInt(lastVisit);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysAgo = Math.floor(difference / oneDay);

        if (daysAgo < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysAgo === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysAgo} days ago.`;
        }
    }

    // Update last visit time
    localStorage.setItem("lastVisit", now.toString());

    // Fetch JSON Data
    fetch("data/discover.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(place => {
            try {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h2");
                title.textContent = place.name;

                const figure = document.createElement("figure");
                const img = document.createElement("img");
                img.src = place.image;
                img.alt = place.name;

                img.onerror = () => {
                    console.error(`Image not found: ${place.image}`);
                    img.style.display = "none"; // hides broken image
                };

                figure.appendChild(img);

                const address = document.createElement("address");
                address.textContent = place.address;

                const description = document.createElement("p");
                description.textContent = place.description;

                const button = document.createElement("a");
                button.href = place.link;
                button.textContent = "Learn More";
                button.classList.add("learn-more");

                card.appendChild(title);
                card.appendChild(figure);
                card.appendChild(address);
                card.appendChild(description);
                card.appendChild(button);

                cardsContainer.appendChild(card);
            } catch (error) {
                console.error("Error creating card for:", place.name, error);
            }
        });
    })
    .catch(error => console.error("Error loading data:", error));
});