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

    function changeText() {
        textElement.style.opacity = "0";
        setTimeout(() => {
            textElement.textContent = textArray[textIndex];
            textElement.style.opacity = "1";
            textIndex = (textIndex + 1) % textArray.length;
        }, 500); 
    }

    setInterval(changeText, 3000);
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
