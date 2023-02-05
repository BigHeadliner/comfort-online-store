$(function () {

    var elem = document.querySelector('.collection__items');
    var iso = new Isotope(elem, {
        // options
        itemSelector: '.collection__item',
        layoutMode: 'fitRows',
    });

    $('.ship__slider').slick({ 
        prevArrow:'<button type="button" class="slick-prev"><img src="images/ship/prev.svg" alt=""></button>', 
        nextArrow:'<button type="button" class="slick-next"><img src="images/ship/next.svg" alt=""></button>', 
        slidesToShow: 4,
        slidesToScroll: 1,})
   
});