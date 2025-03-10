document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelector(".slides");

  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");
  let dotsContainer = document.querySelector(".dots");
  let slide = document.querySelectorAll(".slide");
  let slideCount = slide.length;

  let currentSlide = 0;

  // create dots{
  for (let i = 0; i < slideCount; i++) {

    dotsContainer.innerHTML += `<div class="dot ${i == 0 && "active"}" data-index= "${i}"><div/>`

    // another way of creating dots 

    // let dot = document.createElement("span");
    // if (i === 0) {
    //   dot.classList.add("active");
    // }
    // dot.classList.add("dot");
    // dot.setAttribute("data-index", i);
    // dotsContainer.appendChild(dot);
  }

  let dots = document.querySelectorAll(".dot");

  // Update Slider Function

  function updateSlider(index) {
    if (index >= slideCount) {
      currentSlide = 0;
    }
     else if (index < 0) {
      currentSlide = slideCount - 1; 
    } 
    else {
      currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
  }

  prevButton.addEventListener("click", function () {
    updateSlider(currentSlide - 1);
  });
  nextButton.addEventListener("click", function () {
    updateSlider(currentSlide + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.getAttribute("data-index"));
      updateSlider(index);
    });
  });

    // the functionality of auto play slider 
  setInterval(()=>{
    updateSlider(  currentSlide +1)
  },1500)

});
