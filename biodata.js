// Select the parallax section
const parallax = document.querySelector('.parallax');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the vertical scroll position
    const scrollPosition = window.pageYOffset;

    // Move the background image based on the scroll position
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust speed with 0.5
});
