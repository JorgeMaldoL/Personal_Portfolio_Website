// Select all navigation links and sections
const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');
const darkModeToggle = document.getElementById('darkModeToggle');

let currentSection = 'home';

// Update the active navigation link based on scroll position
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});

// Toggle dark mode
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}
