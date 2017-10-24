// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require_tree .

// $(function(){ $(document).foundation(); });

$(document).ready(function() {
  $('.nav-dropdown').hide();
  $('.search-dropdown').hide();
});

$(document).ready(function() {
  $('#account-menu').click( function(event){
    event.stopPropagation();
    $('.nav-dropdown').slideToggle("fast");
    // $('.search-dropdown').hide();
  });
  $('#search-options').click( function(event){
    event.stopPropagation();
    $('.search-dropdown').slideToggle("fast");
    // $('.nav-dropdown').hide();
  });

  // $(document).click( function(){
  //   $('.search-dropdown').hide();
  //   $('.nav-dropdown').hide();
  // });

});
