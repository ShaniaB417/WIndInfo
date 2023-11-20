/* javascript for photo slide show on info page */

let currentImage = 0;
const images = document.querySelectorAll("#photo-gallery img");

function showImage(index) {
  images.forEach((image) => (image.style.display = "none"));
  images[index].style.display = "block";
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function startSlideshow() {
  setInterval(nextImage, 3000);
}

// Use addEventListener for window load event
window.addEventListener("load", startSlideshow);
