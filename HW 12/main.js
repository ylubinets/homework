
   let slideIndex = 1;
   showSlides(slideIndex);

   function nextSlide() {
    showSlides(slideIndex += 1);
   }

   function showSlides(n) {
    const slides = document.querySelectorAll(".image-to-show");
    if (n > slides.length) {
     slideIndex = 1
    }
    if (n < 1) {
     slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
   }

   let isSliderRunningNow;
   let slideInterval = setInterval(nextSlide, 3000);;
   const start = document.querySelector('.start');
   const pauseButton = document.querySelector('.stop')

    start.addEventListener('click', () => {
        if (isSliderRunningNow === false) {
            slideInterval = setInterval(nextSlide, 3000);
            isSliderRunningNow = true;
        }
    })

    pauseButton.addEventListener('click', () => {
      clearInterval(slideInterval);
      isSliderRunningNow = false;
    });
