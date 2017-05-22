$(document).ready(function() {

  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    console.log("small screen 1");
    $("#wrapper").removeClass("toggled");
    $(".navbar-resume").show();
    $("#menu-toggle").hide();
    $(".sidebar-nav").hide();
    $(".product-logo").detach();
  } else {
    console.log("bigger screen 1");
    $("#menu-toggle").show();
    $(".navbar-resume").hide();
    $(".sidebar-nav").show();
    $(".product-logo").append();
    $("#wrapper").addClass("toggled");
    $( "#menu-toggle" ).on("click", function(e) {
      console.log("click general1");
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  };

  $(window).resize(function () {
    var viewportWidth = $(window).width();
    var logo = $(".product-logo").clone(true);
    if (viewportWidth < 768) {
      console.log("small screen 2");
      $("#wrapper").removeClass("toggled");
      $(".navbar-resume").show();
      $("#menu-toggle").hide();
      $(".sidebar-nav").hide();
      $(".product-logo").detach();
      $(".hamburger").removeClass("is-open");
      $(".hamburger").addClass("is-closed");
    } else {
      console.log("bigger screen 2");
      $("#menu-toggle").show();
      $(".navbar-resume").hide();
      $(".sidebar-nav").show();
      logo.appendTo(".test");
      $(".hamburger").removeClass("is-open");
      $(".hamburger").addClass("is-closed");
      $("#wrapper").addClass("toggled");
      $( "#menu-toggle" ).on("click", function(e) {
        console.log("click general2");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
    };
  });
});

