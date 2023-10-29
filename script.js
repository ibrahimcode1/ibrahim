const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileView = document.querySelector(".mobile-view");

hamburgerBtn.addEventListener("click", () => {
  mobileView.classList.toggle("active");
});
