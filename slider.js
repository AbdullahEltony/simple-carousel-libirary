// ------------------ variables --------------------
const slider = document.querySelector('.Slider')
const sliderContainer = document.querySelector('.Slider__container')
const sliderCards = document.querySelector('.Slider__Cards')
const sliderItems = document.querySelectorAll('.Slider__item')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
let windowSize;

// ------------------ start Slider class ------------------
class Slider {
    constructor(slider) {
        this.speed = slider;
        this.margin = slider;
        this.loop = slider;
        this.responsive = slider;
    }

    nexSlide() {
        for(let i = mediaLength - 1; i >=0 ; i--) {
            if(windowSize >= mediaQeryes[i]) {
                let point = this.responsive[`${mediaQeryes[i]}`];
                    sliderCards.scrollLeft += sliderCards.clientWidth / point;
                break;

            }
        }
    }

    prevSlide() {
        for(let i = mediaLength - 1; i >=0 ; i--) {
            if(windowSize >= mediaQeryes[i]) {
                let point = this.responsive[`${mediaQeryes[i]}`];
                    sliderCards.scrollLeft -= sliderCards.clientWidth / point;
                break;

            }
        }
    }
}

const newSlider = new Slider();
newSlider.speed = 1;
newSlider.margin = '1%';
newSlider.touchEnable = true;
newSlider.loop = false;
newSlider.responsive = {
    0 : 1,

    576: 2,

    776: 3,

    992:4
}
let mediaQeryes = Object.keys(newSlider.responsive)
let mediaLength = mediaQeryes.length;
let breakBoints = newSlider.responsive;
resizeWindow();
window.onresize = function(){
    resizeWindow();
}

nextBtn.addEventListener('click',()=>{
   newSlider.nexSlide()
})

prevBtn.addEventListener('click',()=>{
    newSlider.prevSlide()
})




function resizeWindow() {
    windowSize = window.innerWidth;

    for(key in breakBoints) {
       if(windowSize >= key) {
             sliderItems.forEach(item=>{
              item.style.width = `calc(94% / ${breakBoints[key]})`
              item.style.margin = `0 calc(3% / ${breakBoints[key]})`
             })
       }
    }
    
        enableThouch()

    
}




function enableThouch()  {
    if(newSlider.touchEnable) {
        let pressed = false;
        let startX = 0;
        sliderCards.addEventListener('mousedown',(e)=>{
        pressed = true;
        startX = e.clientX;
        sliderCards.style.cursor = 'grabbing'
        })
        window.addEventListener('mouseup',()=>{
        pressed = false;
        sliderCards.style.cursor = 'grab'
        })
        sliderCards.addEventListener('mouseleave',()=>{
        pressed = false;
        })
        sliderCards.addEventListener('mousemove',(e)=>{
        if(!pressed) {
            return;
        }
        scrollMov = startX - e.clientX;
        sliderCards.scrollLeft += scrollMov ;

        })
    }else {
        return
    }
}


