$(function() {
  $("#newBurger").on("submit", function(event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#newBurgerName")
        .val()
        .trim()
    };
    $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function() {
      $("#newBurgerName").val("");
      location.reload();
    });
  });
});
