var slideIndex = 1;
nextSlide(slideIndex);

// Changing the slide
function nextSlide(n) {

  var i = 0;
  var slideRowContainer = document.querySelectorAll(".row-container");

  if (n < 1) {
    slideIndex = slideRowContainer.length;
  }
  if (n > slideRowContainer.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slideRowContainer.length; i++) {
    slideRowContainer[i].style.display = "none";
  }

  slideRowContainer[slideIndex - 1].style.display = "inline-flex";
}

//Button operation
for (z = 0; z <= 1; z++) {
  document.querySelectorAll(".next")[z].addEventListener("click", function() {
    slideIndex++;
    nextSlide(slideIndex);
  });

  document.querySelectorAll(".prev")[z].addEventListener("click", function() {
    slideIndex--;
    nextSlide(slideIndex);
  });
}
