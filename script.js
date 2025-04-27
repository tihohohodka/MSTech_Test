// Select the header element
const header = document.querySelector('header');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add a class to change the background when scrolled
        header.classList.add('scrolled');
    } else {
        // Remove the class when scrolled back to the top
        header.classList.remove('scrolled');
    }
});