const nav = document.querySelector(".navbar");
const navBar = document.querySelectorAll(".nav-link");
const navColapse = document.querySelector(".navbar-collapse.collapse");
const hireDetail = document.querySelector(".hire-details");
const enquireBtn = document.querySelector(".enquire-btn");
const closeBtn = document.querySelector(".close-btn"); 

// function for scroll-bar
window.onscroll = () => {
  if (document.documentElement.scrollTop > 40) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// function for hide navbar in mobile-view
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navColapse.classList.remove("show");
  });
});



// for swipper
const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});



// for collage swipper
var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for enquire modal
closeBtn.addEventListener("click", () => {
  hireDetail.classList.add("detail");
  hireDetail.classList.remove("showDetail");
});

enquireBtn.addEventListener("click", () => {
  hireDetail.classList.add("showDetail");
});