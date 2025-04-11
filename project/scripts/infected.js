const infectedElements = document.querySelectorAll('.infected');

const infectedInfo = {
    boomer: {
        name: "Boomer",
        description: "The Boomer is a bloated Special Infected whose main weapon is his vomit, which attracts a horde of zombies.",
        image: "images/boomer.webp"
    },
    hunter: {
        name: "Hunter",
        description: "The Hunter is an agile Special Infected who can leap great distances and pin Survivors to the ground.",
        image: "images/hunter.webp"
    },
    smoker: {
        name: "Smoker",
        description: "The Smoker uses his long tongue to ensnare Survivors from a distance, leaving them vulnerable.",
        image: "images/smoker.webp"
    },
    tank: {
        name: "Tank",
        description: "The Tank is a massive Special Infected with incredible strength and durability, capable of dealing devastating blows.",
        image: "images/tank.webp"
    },
    jockey: {
        name: "Jockey",
        description: "The Jockey is a small and agile Infected that leaps onto Survivors, controlling their movement.",
        image: "images/jockey.webp"
    },
    charger: {
        name: "Charger",
        description: "The Charger charges at Survivors, knocking them down and pummeling them into the ground.",
        image: "images/charger.webp"
    },
    spitter: {
        name: "Spitter",
        description: "The Spitter launches globs of acidic spit that create a hazardous area, dealing damage over time.",
        image: "images/spitter.webp"
    },
    witch: {
        name: "Witch",
        description: "The Witch is a powerful and hostile Infected that will attack Survivors if provoked or disturbed.",
        image: "images/witch.webp"
    }
};

infectedElements.forEach(infected => {
    infected.addEventListener('click', function () {
        const infectedKey = infected.getAttribute('data-infected');
        const infectedData = infectedInfo[infectedKey];

        // Check if the clicked infected is already active
        const isActive = infected.classList.contains('active');

        // Close all active dropdowns and show all images
        infectedElements.forEach(i => {
            i.classList.remove('active');

            // Remove existing details dropdown
            const existingDetails = i.querySelector('.details');
            if (existingDetails) existingDetails.innerHTML = '';

            // Show the image in the HTML file
            const image = i.querySelector('img');
            if (image) image.style.display = 'block';
        });

        // Toggle the clicked infected's details
        if (!isActive) {
            // Hide the clicked infected's image in the HTML file
            const imgElement = infected.querySelector('img');
            if (imgElement) imgElement.style.display = 'none';

            // Create and show the dropdown for the clicked infected
            const detailsContent = infected.querySelector('.details');
            detailsContent.innerHTML = `
                <h3>${infectedData.name}</h3>
                <p>${infectedData.description}</p>
                <img src="${infectedData.image}" alt="${infectedData.name}">
            `;
            infected.classList.add('active');
        }
    });
});