// Modal functions
// Get all modal elements
const modals = {
    "np-modal": document.getElementById("np-modal"),
    "bronze-modal": document.getElementById("bronze-modal"),
    "silver-modal": document.getElementById("silver-modal"),
    "gold-modal": document.getElementById("gold-modal")
};

// Get all links that open modals
const modalLinks = document.querySelectorAll(".card a");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close");

// Open modal when a link is clicked
modalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetModal = event.target.getAttribute("data-modal");
        if (modals[targetModal]) {
            modals[targetModal].style.display = "flex";
        }
    });
});

// Close modal when clicking the close button
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.parentElement.style.display = "none";
    });
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    for (let modal in modals) {
        if (event.target === modals[modal]) {
            modals[modal].style.display = "none";
        }
    }
});
