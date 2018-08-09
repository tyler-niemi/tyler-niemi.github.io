$(window).load( function ()
{
  $('#work').fadeIn('slow', function()
  {
    $(this).fadeTo("slow", 1);
  });
});

$(document).ready(function()
{
  $("article").hide();
  $("a").click(function (e)
  {
    e.preventDefault();
    $("#" + $(this).attr("class")).show().siblings('article').hide();
  });

});

function openTrips() {
    window.open("trips.html");
}

function openShop() {
    window.open("donut_shop.html");
}






