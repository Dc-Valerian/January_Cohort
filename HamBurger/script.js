const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
