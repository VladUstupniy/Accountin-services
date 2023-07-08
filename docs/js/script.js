const clientsSLiderItem = document.querySelectorAll('.clients__item');
window.addEventListener('resize', () => {
    if (this.window.innerWidth <= 1200) {
        clientsSLiderItem[3].style.display = "none";
    }else{
        clientsSLiderItem[3].style.display = "block";
    }

    if (this.window.innerWidth <= 992) {
        clientsSLiderItem[2].style.display = "none";
    }else{
        clientsSLiderItem[2].style.display = "block";
    }

    if (this.window.innerWidth <= 768) {
        clientsSLiderItem[1].style.display = "none";
    }else{
        clientsSLiderItem[1].style.display = "block";
    }
});



function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll() {
    window.onscroll = function() {};
}


const burger = document.getElementById('burger');
const navLine = document.getElementById('navLine');
burger.addEventListener('click', () => {
    navLine.classList.toggle('nav__line--active');
    if (navLine.classList.contains('nav__line--active')) {
        disableScroll();
    }else{
        enableScroll();
    };
});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});