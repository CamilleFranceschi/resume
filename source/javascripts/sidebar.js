$(document).ready(function() {
  // $( "#menu" ).click(function() {
  $( "#menu" ).click(function() {
    console.log("helo");
    $('#sidebar').toggle("slow", function() { // enleve le contenu et le remet hide and show
      console.log("callback");
      $("#page-content").toggleClass("toggled");
      $("#menu").toggleClass("lefted"); // supprime et remet une classe
      $("#menu").toggleClass("relefted");
      // $('#menu').css('left', '0')  // modifie de maniere permanente
    });
  });
});

// $('button').toggle(
// function() {
//     $('#B').css('left', '0')
// }, function() {
//     $('#B').css('left', '200px')
// })

// $( "p" ).click(function() {
//   $( this ).toggleClass( "highlight" );
// });