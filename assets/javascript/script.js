// carousel
$(document).ready(function () {
  $(".carousel")
    .carousel({
      interval: 6000,
      pause: "hover",
    })
    .carousel("cycle");
});

// Go top btn

let mybutton = document.getElementById("upBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
