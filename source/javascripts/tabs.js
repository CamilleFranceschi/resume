$(function(){
  $(".tab-column").on("click", function(e){
    // Change active tab
    $(".tab-column").removeClass('active');
    $(this).addClass('active');
    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass('hidden');
    // Show target tab-content (use class="hidden")
    $($(this).data('target')).removeClass('hidden');
  });
});
