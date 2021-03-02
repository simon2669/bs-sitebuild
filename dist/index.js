
window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  let windowPosition = window.scrollY > 0;
  console.log(windowPosition)
  header.classList.toggle("bg-light", windowPosition);

});
