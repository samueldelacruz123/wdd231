document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Get user input
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
    
        if (name === "" || email === "") {
            alert("Please fill out all fields.");
            return;
        }
    
        // Save name and email to localStorage
        localStorage.setItem("subscriberName", name);
        localStorage.setItem("subscriberEmail", email);
    
        // Redirect to thank-you page
        window.location.href = "thank-you.html";
    });
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}
