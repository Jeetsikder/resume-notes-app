let navbar = document.getElementById("navbar");
window.onscroll = function () {
  if (window.screenTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// HAMBURGAR
let navbarToggler = document.querySelector(".navbar-toggler");
// console.log(navbarToggler);
navbarToggler.addEventListener("click", () => {
  navbar.classList.add("scrolled");
});
