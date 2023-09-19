const btnNav = document.querySelector("#btnNav");
const nav = document.querySelector("nav");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnNav.classList.toggle("active");
});

const swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
