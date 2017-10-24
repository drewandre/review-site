// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('#menu-toggle').click( function(event){
    event.stopPropagation();
    $('.nav-dropdown').toggle();

});

$(document).click( function(){
    $('.nav-dropdown').hide();
    let dropdown = false;
    console.log(dropdown);
});
