let sliderImg = document.querySelectorAll(".images-wrapper img");
let currentSlide = 0;
let breakPoint = 0; 
let timer = function slider() {
    
    if (breakPoint === 0) {
    
    for (let i = 0; i < sliderImg.length; i++) {
        sliderImg[i].classList.add('hide');
    }
    sliderImg[currentSlide].classList.remove('hide');
    
    if (currentSlide + 1 === sliderImg.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    setTimeout(slider, 3000);
}
}

setTimeout(timer, 3000);

let stop = document.querySelector('.stop');
let play = document.querySelector('.start');

stop.addEventListener('click', () => {
    breakPoint = 1;
    clearTimeout(timer);
});

play.addEventListener('click', () => {
    breakPoint = 0;
    setTimeout(timer, 3000);
});

