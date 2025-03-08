document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active"); // Keep menu icon in place
    });

    // Highlight current page
    const currentUrl = window.location.href;
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});