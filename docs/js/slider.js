$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      // часто используемые:
      items: 1, // количество слайдов на экране
      loop: true, // бесконечная прокрутка
      margin: 20, // расстояние между слайдами
      nav: true, // стрелки
      dots: true, // точки
      mouseDrag: true, // перелистывание мышкой
      touchDrag: true, // перелистывание на тачскринах
      navText: [
        '<img src="img/arrow-prev.svg" alt="Назад">',
        '<img src="img/arrow-next.svg" alt="Вперёд">'
      ], // текст кнопок слайдера?
      // responsive:{0:{items:1},600:{items:3},1000:{items:5}} // адаптив
  
      // редко используемые:
      center: false, // центрирование слайда
      autoWidth: false, // автоматическая ширина всего слайдера
      rewind: false, // перемотка назад после завершения пролистывания
      lazyLoad: false, // ленивая загрузка
      video: false, // видео
      videoWidth: false, // ширина видео
      videoHeight: false, // высота видео
      autoplay: false, // автопролистывание
      autoplayTimeout: 5000, // Автоматическое отключение воспроизведения
      autoplayHoverPause: false, // Автозапуск с остановкой при ховере
    });
  });