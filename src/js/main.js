const menuButton = document.querySelector(".b-menu");
const menu = document.querySelector(".navbar-menu");


menuButton.addEventListener("click", () => {
  console.log("clickmenu");
  menu.classList.toggle("is-open");

})
