// document.getElementById("cart-info").addEventListener("click", function() {
//   const cart = document.getElementById("cart");
//   cart.classList.toggle("show-cart");
//   console.log(cart);
// });

$(document).ready(function () {
  $(".popup-btn").click(function () {
    $(".popup")
      .css("display", "flex")
      .css("animation", "popup-bg 1s")
      .css("animation-interaction-count", "1");
    $(".popup-wrap")
      .css("animation", "popup 1s")
      .css("animation-iteration-count", "1");
  });

  $(".close").click(function () {
    $(".popup-wrap")
      .css("animation", "popup 1s")
      .css("animation-iteration-count", "1");
    $(".popup").delay(500).fadeOut();
  });
});