const sliderMenu = document.querySelector('.slider__menu');
const sliderItems = document.querySelectorAll('.slider__item');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const step = 200;
const treshold = -(sliderItems.length - 3) * step;

function shift(e) {
    const margin = parseInt(getComputedStyle(sliderMenu).marginLeft);

    if(e.target === left && margin < 0) {
        sliderMenu.style.marginLeft = `${margin + step}px`
    }
    if(e.target === right && margin > treshold) {
        sliderMenu.style.marginLeft = `${margin - step}px`
    }
}

left.addEventListener('click', (e) => shift(e))
right.addEventListener('click', (e) => shift(e))