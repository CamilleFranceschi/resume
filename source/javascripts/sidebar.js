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


$(document).ready(function() {

  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    console.log("small screen 1");
    $("#wrapper").removeClass("toggled");
    $(".navbar-resume-item").show();
    $("#menu-toggle").hide();
    $(".sidebar-nav").hide();
  } else {
    console.log("bigger screen 1");
    $("#menu-toggle").show();
    $(".navbar-resume-item").hide();
    $(".sidebar-nav").show();
    $("#wrapper").addClass("toggled");
    $( "#menu-toggle" ).on("click", function(e) {
      console.log("click general1");
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  };



  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      console.log("small screen 2");
      $("#wrapper").removeClass("toggled");
      $(".navbar-resume-item").show();
      $("#menu-toggle").hide();
      $(".sidebar-nav").hide();
    } else {
      console.log("bigger screen 2 ");
      $("#menu-toggle").show();
      $(".navbar-resume-item").hide();
      $(".sidebar-nav").show();
      $("#wrapper").addClass("toggled");
      $( "#menu-toggle" ).on("click", function(e) {
        console.log("click general2");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
    };
  });
});

