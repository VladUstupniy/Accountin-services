function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
function enableScroll() {
  window.onscroll = function () {};
}

const burger = document.getElementById("burger");
const navLine = document.getElementById("navLine");
burger.addEventListener("click", () => {
  navLine.classList.toggle("nav__line--active");
  if (navLine.classList.contains("nav__line--active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});
