const menuButton = document.querySelector(".b-menu");
const menu = document.querySelector(".navbar-menu");

menuButton.addEventListener("click", () => {
  console.log("clickmenu");
  menu.classList.toggle("is-open");
  
})
//Бургер меню


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  slidesPerView: 1,
  // autoHeight: true,
  spaceBetween: 30,

});
// //Инициализация свайпера