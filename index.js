const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const maxIndex = items.length - 3; // Show 3 items

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 32; // margin (1rem * 2)
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
