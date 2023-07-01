const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let currentActive = 1;


next.addEventListener('click', () =>{
    currentActive++;
    if(currentActive>circles.length){
        currentActive=circles.length;
    }
    update()
})

prev.addEventListener('click', () =>{
    currentActive--;
    if(currentActive<1){
        currentActive=circles.length;
    }
    update()
})

function update(){
    circles.forEach((circle, idx)=>{
        if(idx<currentActive){
        circle.classList.add('active')
    }else{
        circle.classList.remove('active')
    }
})
    const actives=document.querySelectorAll('.active')

    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%';

    if(currentActive===1){
        prev.disabled=true;
    }else if(currentActive===circles.length){
        next.disabled=true; 
    }else{
        prev.disabled=false;
        next.disabled=false;
    }

}

// Image slider code adapted
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.getElementsByClassName('slide');
let currentSlideIndex = 0;

updateSliderVisibility();

function nextStep() {
    const progress = document.getElementById('progress');

    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        prevButton.disabled = false;
        progress.style.width = `${(currentSlideIndex / (slides.length - 1)) * 100}%`;
    }

    if (currentSlideIndex === slides.length - 1) {
        nextButton.disabled = true;
    }

    updateSliderVisibility();
}

function prevStep() {
    const progress = document.getElementById('progress');

    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        nextButton.disabled = false;
        progress.style.width = `${(currentSlideIndex / (slides.length - 1)) * 100}%`;
    }

    if (currentSlideIndex === 0) {
        prevButton.disabled = true;
    }

    updateSliderVisibility();
}


function updateSliderVisibility() {
   
    for (let i = 0; i < slides.length; i++) {
        
        if (i === currentSlideIndex) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}

prevButton.addEventListener('click', prevStep);
nextButton.addEventListener('click', nextStep);


