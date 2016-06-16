$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var firstItem = $("input#grocery1").val();
    var secondItem = $("input#grocery2").val();
    var thirdItem = $("input#grocery3").val();

    var groceries = [firstItem, secondItem, thirdItem];
    groceries.sort();

    var upperGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });


    $("ul#shoppingcart").show();
    $(".first").text(upperGroceries[0]);
    $(".second").text(upperGroceries[1]);
    $(".third").text(upperGroceries[2]);

    $("#blanks").hide();
    event.preventDefault();
  });
});
