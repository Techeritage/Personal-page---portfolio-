var nav = document.getElementById("nav1");
var fixedHeight = 60;
var target = document.getElementById("target");
var scrollButton = document.getElementById("scrollbutton");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > fixedHeight) {
    nav.classList.remove("nav1");
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
    nav.classList.add("nav1");
  }
});

scrollButton.addEventListener('click', function() {
  target.scrollIntoView({ behavior: 'auto' });
});