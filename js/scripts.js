$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("darkmode");
    $("button#light").toggle();
    $("button#dark").toggle();
  });

  $("button#light").click(function() {
    $("body").removeClass("darkmode");
    $("button#dark").toggle();
    $("button#light").toggle();
  });

  $("p").click(function() {
    $(this).toggleClass("borderHighlight");
  });
});