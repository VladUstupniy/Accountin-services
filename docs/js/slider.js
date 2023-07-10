$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // количество слайдов на экране
    loop: true, // бесконечная прокрутка
    margin: 0, // расстояние между слайдами
    nav: true, // стрелки
    dots: true, // точки
    mouseDrag: true, // перелистывание мышкой
    touchDrag: true, // перелистывание на тачскринах
    navText: [
      '<img src="img/arrow-prev.svg" alt="Назад">',
      '<img src="img/arrow-next.svg" alt="Вперёд">',
    ],
  });

  $(".owl-carousel-two").owlCarousel({
    items: 4, // количество слайдов на экране
    loop: true, // бесконечная прокрутка
    margin: 0, // расстояние между слайдами
    nav: true, // стрелки
    dots: true, // точки
    mouseDrag: true, // перелистывание мышкой
    touchDrag: true, // перелистывание на тачскринах
    navText: [
      '<img src="img/arrow-prev.svg" alt="Назад">',
      '<img src="img/arrow-next.svg" alt="Вперёд">',
    ],
    responsive: {
      0: { items: 1, slideBy: 1 },
      768: { items: 2, slideBy: 2 },
      992: { items: 3, slideBy: 3 },
      1200: { items: 4, slideBy: 4 },
    }, // адаптив
  });
});
