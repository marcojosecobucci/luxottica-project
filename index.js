$(document).ready(function(){
// savings menu scroll desktop
$('#savings').click(function() {
    $('.midbar__down').slideToggle();
});
// ricerca al click di btn desktop
$('.btn__search').click(function() { 
    $('#input__search').slideToggle();
})
// menu burgher mobile
$( ".cross" ).hide();
$( ".menu__burger__list" ).hide();
$( ".btn__hamburger" ).click(function() {
$( ".menu__burger__list" ).slideToggle( "slow", function() {
$( ".btn__hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu__burger__list" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".btn__hamburger" ).show();
});
});
// slide toggle footer ul
$('#btn__footer').click(function() {
    $('.footerbar__down').slideToggle();
});
$('#btn__footer1').click(function() {
    $('.footerbar__down1').slideToggle();
});

$('#btn__footer2').click(function() {
    $('.footerbar__down2').slideToggle();
});


});


