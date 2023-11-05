// Navbar
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const navicon = document.querySelector('.navicon');

const toggleNavbar = () => {
    navlinks.classList.toggle("navlinks");
    navicon.classList.toggle('fa-times');
};
hamburger.addEventListener('click', () => toggleNavbar ());

// Counter
let valueDisplays = document.querySelectorAll(".count");
let interval = 6000;
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
