/* carousel */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
});


$('.slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

/* nav icon */

const navBtn = document.querySelector(".nav__toggle");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");

navBtn.onclick = function () {
  nav.classList.toggle("nav__mobile");
  navIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};
