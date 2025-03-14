// Navbar
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const navicon = document.querySelector('.navicon');

const toggleNavbar = () => {
    navlinks.classList.toggle("navlinks");
    navicon.classList.toggle('fa-times');
};
hamburger.addEventListener('click', () => toggleNavbar ());

document.querySelectorAll('.navlinks a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let targetId = this.getAttribute('href'); 
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("changing-text");
    let textArray = [
        "Cybersecurity Engineer",
        "Ethical Hacker",
        "Web Penetration Tester"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = textArray[textIndex];
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100; 

        if (!isDeleting && charIndex === currentText.length) {
            speed = 1500; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; 
            speed = 500; 
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect(); 
});

// Counter
let valueDisplays = document.querySelectorAll(".count");
let interval = 6000;
let counterSection = document.querySelector(".counter");

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      observer.unobserve(counterSection);
    }
  });
}, { threshold: 0.5 }); 

observer.observe(counterSection);

// Slider
$('.testimonials-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});
