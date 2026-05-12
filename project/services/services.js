


document.querySelectorAll(".carousel-item img").forEach(img => {
  img.addEventListener("click", function () {
    let carousel = document.querySelector("#carouselExample");
    let bsCarousel = bootstrap.Carousel.getInstance(carousel);
    bsCarousel.next();
  });
});


document.querySelector("button").addEventListener("click", function () {
  document.getElementById("frames").scrollIntoView({
    behavior: "smooth"
  });
});