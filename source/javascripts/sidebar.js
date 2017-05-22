// $(document).ready(function() {
//   $( "#menu" ).click(function() {
//     $('#sidebar').toggle("slow", function() { // enleve le contenu et le remet hide and show
//       console.log("callback");
//       $("#page-content").toggleClass("toggled");
//       $("#menu").toggleClass("lefted"); // supprime et remet une classe
//       $("#menu").toggleClass("relefted");
//       // $('#menu').css('left', '0')  // modifie de maniere permanente
//     });
//   });
// });


// $(document).ready(function() {

//   $(window).resize(function () {
//     var viewportWidth = $(window).width();
//     if (viewportWidth < 768) {
//       console.log("test")
//       $("#wrapper").removeClass("toggled");
//       $('#sidebar').toggle("slow", function() { // enleve le contenu et le remet hide and show
//         console.log("callback");
//         $("#page-content").toggleClass("toggled");
//         // $('#menu').css('left', '0')  // modifie de maniere permanente
//       });
//     } else {
//       $( "#menu-toggle" ).on("click", function(e) {
//           e.preventDefault();
//           console.log("test");
//           $("#wrapper").toggleClass("toggled");
//       });
//     }
//   });
// });
$(document).ready(function() {
  $( "#menu-toggle" ).on("click", function(e) {
      e.preventDefault();
      console.log("test");
      $("#wrapper").toggleClass("toggled");
  });
});
