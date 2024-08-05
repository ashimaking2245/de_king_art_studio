document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links-menu');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
