$(document).ready(function(){

$('#savings').click(function() {
    $('.midbar__down').slideToggle();
});

$('.btn__search').click(function() { 
    $('#input__search').slideToggle();
})
$( ".cross" ).hide();
$( ".menu__burgher__list" ).hide();
$( ".btn__hamburgher" ).click(function() {
$( ".menu__burgher__list" ).slideToggle( "slow", function() {
$( ".btn__hamburgher" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu__burgher__list" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".btn__hamburgher" ).show();
});
});

});

$(document).ready(function() {

})

