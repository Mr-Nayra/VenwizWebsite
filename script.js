const carousel = document.getElementById("carousel");

// Get the slides
const slides = carousel.children;

// Set the current slide
let currentSlide = 0;

// Show the first slide
slides[currentSlide].classList.add("active");

// Next button event listener
document.getElementById("next-button").addEventListener("click", () => {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove("active");

  // Increment the current slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Add the active class to the new current slide
  slides[currentSlide].classList.add("active");
});

// Prev button event listener
document.getElementById("prev-button").addEventListener("click", () => {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove("active");

  // Decrement the current slide
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Add the active class to the new current slide
  slides[currentSlide].classList.add("active");
});
