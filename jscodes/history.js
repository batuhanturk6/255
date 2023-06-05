$(document).ready(function() {
    $(".year-item").click(function() {
    // Remove active class from all year items
    $(".year-item").removeClass("active");
    // Add active class to the clicked year item
    $(this).addClass("active");

    // Hide all photos
    $(".photos img").removeClass("active");
    // Show the corresponding photo based on the clicked year item
    var year = $(this).text();
    $("#photo-" + year).addClass("active");
  });
    $(".year-item-1").click(function() {
      $("#infos1").show("3000");
      $("#infos2").hide();
      $("#infos3").hide();
      $("#infos4").hide();
    });
    $(".year-item-2").click(function() {
      $("#infos2").show("3000");
      $("#infos3").hide();
      $("#infos4").hide();
      $("#infos1").hide();
    });
    $(".year-item-3").click(function() {
      $("#infos3").show("3000");
      $("#infos2").hide();
      $("#infos1").hide();
      $("#infos4").hide();
    });
    $(".year-item-4").click(function() {
      $("#infos4").show("3000");
      $("#infos3").hide();
      $("#infos2").hide();
      $("#infos1").hide();
    });
});