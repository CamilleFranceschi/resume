$(document).ready(function() {

  var viewportWidth = $(window).width();
  // At the beginning / arriving first on teh website
  if (viewportWidth < 768) {
    console.log("small screen 1");
    // Get rid of padding left due to sidebar
    $("#wrapper").removeClass("toggled");
    // Expose the navbar
    $(".navbar-resume").show();
    // Hide side bar and toggle button
    $("#menu-toggle").hide();
    $(".sidebar-resume").hide();
  } else {
    console.log("bigger screen 1");
    // Expose side bar and toggle button
    $("#menu-toggle").show();
    $(".sidebar-resume").show();
    // Hide the navbar
    $(".navbar-resume").hide();
    // Add padding left due to sidebar
    $("#wrapper").addClass("toggled");
    // On click we get rid or not of this padding left due to side bar
    $( "#menu-toggle" ).on("click", function(e) {
      console.log("click general1");
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  };

  // On resize
  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      console.log("small screen 2");
      // Get rid of padding left due to sidebar
      $("#wrapper").removeClass("toggled");
      // Expose the navbar
      $(".navbar-resume").show();
      // Hide side bar and toggle button
      $("#menu-toggle").hide();
      $(".sidebar-resume").hide();
      $(".hamburger").removeClass("is-open");
      $(".hamburger").addClass("is-closed");
    } else {
      console.log("bigger screen 2");
      // Hide the navbar
      $(".navbar-resume").hide();
      // Expose side bar and toggle button
      $("#menu-toggle").show();
      $(".sidebar-resume").show();
      // To be sure that we have hanburger by default
      $(".hamburger").removeClass("is-open");
      $(".hamburger").addClass("is-closed");
       // Add padding left due to sidebar
      $("#wrapper").addClass("toggled");
      // On click we get rid or not of this padding left due to side bar
      $( "#menu-toggle" ).on("click", function(e) {
        console.log("click general2");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
    };
  });
});

