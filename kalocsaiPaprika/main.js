const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    //TOGGLE NAV MENU

    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle('nav-active');


        burger.classList.toggle('toggle');
    })

}

navSlide();

// ARROW DOWN ON SITE : RECEPTEK.html

function scrollToSection() {
    const section = document.getElementById('target-section');
    section.scrollIntoView({ behavior: 'smooth' });
  }