const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl =>{
        if(window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight/ 2)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl =>{
        if (navLinkEl.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});
