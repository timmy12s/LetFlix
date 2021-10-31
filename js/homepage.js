// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 5000); // Change image every 5 seconds
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

$(document).ready(() => {
  $(function () {
    //value for animation
    var width = 1400;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    //Dom element.
    var $slider = $(".slider");
    var $sliderAnimation = $slider.find(".slides");
    var $slides = $sliderAnimation.find(".slide");

    setInterval(function () {
      $sliderAnimation.animate(
        { "margin-left": "-=" + width },
        animationSpeed,
        function () {
          currentSlide++;
          if (currentSlide === $slides.length) {
            $sliderAnimation.css("margin-left", 0);
            currentSlide = 1;
          }
        }
      );
    }, pause);
  });
});
