function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
  nav.className = "navbar";
  body.className = "";
  menuBtn.classList.remove("open");
}
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const nav = document.getElementsByClassName("navbar")[0];
const body = document.getElementById("home");
const section = document.getElementById("invisible");
var progress = document.getElementById("myBar");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    nav.className += " active";
    body.className += " body";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    nav.className = "navbar";
    body.className = "";
  }
});

window.onscroll = function () {
  myFunction();
};

function fun() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("message").value = "";
}
