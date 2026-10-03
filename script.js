// Smooth Scrolling Logic for Navigation Links

// When a user clicks a menu link, the page scrolls smoothly to the target section.

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the sudden default jump action

        // Find the target section ID from the clicked link's href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll the viewport smoothly to the top of the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Welcome message print on Console
window.addEventListener('DOMContentLoaded', () => {
    console.log("Task 1: Portfolio Website Loaded Successfully!");
});