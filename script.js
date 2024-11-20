const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');
const darkModeToggle = document.getElementById('darkModeToggle');
const projectListItems = document.querySelectorAll('.projects-list li');
const projectDetails = document.querySelectorAll('.project-detail');

// Navigation Scroll Handling
let currentSection = 'home';

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        const sectionTop = sectionEl.offsetTop - sectionEl.clientHeight / 2;
        if (window.scrollY >= sectionTop) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.getAttribute('href').includes(currentSection)) {
            document.querySelector('.nav_link.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});

// Dark Mode Toggle
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Project Tabs Functionality
projectListItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all list items
        projectListItems.forEach(el => el.classList.remove('active'));
        // Remove active class from all project details
        projectDetails.forEach(detail => detail.classList.remove('active'));

        // Add active class to the clicked list item
        item.classList.add('active');
        // Add active class to the corresponding project detail
        const projectId = item.getAttribute('data-project');
        document.getElementById(projectId).classList.add('active');
    });
});
