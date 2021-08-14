$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000 
    })
})

new WOW().init();


$('.burger').on('click', ()=> {
    $('.burger').toggleClass('show-menu');
    $('.header__menu').toggleClass('show')
})

$('.header__menu').on('click',()=> {
    $('.burger').removeClass('show-menu')
    $('.header__menu').removeClass('show')
})