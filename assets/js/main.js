const btnNav = document.querySelector("#btnNav");
const nav = document.querySelector("nav");
const li = document.querySelectorAll("li");

for (const element of li) {
  element.addEventListener("click", () => {
    nav.classList.remove("active");
    btnNav.classList.remove("active");
  });
}

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
});
