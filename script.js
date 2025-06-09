// Menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});

// Fade-in on scroll
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Portfolio gallery slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("gallery-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    let slides = document.getElementsByClassName("gallery-slide");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  function updateSlider() {
    // Merr stilin e slides për marginat
    const slideStyle = getComputedStyle(slides[0]);
    const slideWidth = slides[0].offsetWidth;
    const marginLeft = parseInt(slideStyle.marginLeft);
    const marginRight = parseInt(slideStyle.marginRight);
    const totalWidth = slideWidth + marginLeft + marginRight;

    slider.style.transform = `translateX(${-currentIndex * totalWidth}px)`;

    // Vendos aktivin në cardin aktual
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  // Inicializo slider-in
  updateSlider();
});

