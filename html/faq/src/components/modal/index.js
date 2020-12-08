import './style';



jQuery( ".help__title" ).click(function() {
    jQuery(this).parent().toggleClass("help__item--open");
});

jQuery( ".help__menu--item" ).click(function() {
    jQuery(this).toggleClass("help__menu--open");
});