const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav__wrapper ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("nav__item--active");
    if (li.classList.contains(current)) {
      li.classList.add("nav__item--active");
    }
  });
});
