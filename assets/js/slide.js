/* Function - Slide */
document.querySelector('.btn-next').addEventListener('click', function(){ Next();});
document.querySelector('.btn-prev').addEventListener('click', function(){ Back();});

// Next
var slides = document.querySelectorAll('.slide-img');

function Next() {
    var currentImg = document.querySelector('.active');
    var nextImg = currentImg.nextElementSibling;
    if(nextImg){
        currentImg.classList.remove('active');
        currentImg.classList.remove('rightShow');
        nextImg.classList.add('rightShow');
        nextImg.classList.add('active');
    } else {
        currentImg.classList.remove('active');
        currentImg.classList.remove('rightShow');
        slides[0].classList.add('rightShow');
        slides[0].classList.add('active');
    }
}

//Back
function Back() {
    var currentImg = document.querySelector('.active');
    var prevImg = currentImg.previousElementSibling;
    if(prevImg){
        currentImg.classList.remove('active');
        currentImg.classList.remove('rightShow');
        prevImg.classList.add('rightShow');
        prevImg.classList.add('active');
    } else {
        currentImg.classList.remove('active');
        currentImg.classList.remove('rightShow');
        slides[slides.length - 1].classList.add('rightShow');
        slides[slides.length - 1].classList.add('active');
    }
}

/* Auto Run Slide */
var interval;
function startSlider() {
  interval = setInterval(Next, 6000);
}
function pauseSlider() {
  clearInterval(interval);
}

document.querySelectorAll('.slide-img').forEach(function(e) {
  e.addEventListener('mouseenter', pauseSlider);
})

document.querySelectorAll('.btn-arrow').forEach(function(e) {
    e.addEventListener('mouseenter', pauseSlider);
})

document.querySelectorAll('.slide-img').forEach(function(e) {
  e.addEventListener('mouseleave', startSlider);
})

startSlider();

