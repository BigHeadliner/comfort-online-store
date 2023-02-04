$(function () {

    var elem = document.querySelector('.collection__items');
    var iso = new Isotope(elem, {
        // options
        itemSelector: '.collection__item',
        layoutMode: 'fitRows', 
    });

});