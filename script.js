//Randomize rgb and hsl//
const boxColorRgb = document.querySelector(".box-color-rgb");
const btnRandomizeRgb = document.querySelector("#randomize-rgb");
const rgbTextNumber = document.querySelector(".rgb-number")
const boxColorHsl = document.querySelector(".box-color-hsl");
const btnRandomizeHsl = document.querySelector("#randomize-hsl");
const hslTextNumber = document.querySelector(".hsl-number")

//rgb//
const rgbHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btnRandomizeRgb.addEventListener("click", e => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += rgbHex[createRgb()];
    }

    rgbTextNumber.textContent = hexColor;
    boxColorRgb.style.backgroundColor = hexColor;    
})

function createRgb() {
    return Math.floor(Math.random() * rgbHex.length);
}

//hsl//
function generateHslColors() {
    let hslColors = ""       
    let saturation = Math.floor(Math.random() * (0, 100) + 1);
    let lightness = Math.floor(Math.random() * (0, 100) + 1);
    let hue = Math.floor(Math.random() * (0, 360) + 1)
  
    for (let i = 0; i < 1; i++) {
        hslColors = "hsl(" + hue + "," + saturation + "%," + lightness + "%)"
    } 

    boxColorHsl.style.setProperty('--hsl-random', hslColors);
    hslTextNumber.textContent = hslColors;
    
    return hslColors
}

btnRandomizeHsl.addEventListener("click", generateHslColors);


//Simple counter//
const counterNumber = document.querySelector(".counter-value");
const counterBtns = document.querySelectorAll(".btn-counter");

let count = 0;

counterBtns.forEach(addListener => {
    addListener.addEventListener("click", e => {
        const btnStyle = e.currentTarget.classList;
        if (btnStyle.contains("btn-increase")){
            count++;
        } else if (btnStyle.contains("btn-decrease")){
            count--;
        } else {
            count = 0;
        }

        count < 0 ? counterNumber.setAttribute('data-number-color', 'negative') : 
        count > 0 ? counterNumber.setAttribute('data-number-color', 'positive') : 
        count === 0 ? counterNumber.setAttribute('data-number-color', 'zero') : 
        counterNumber.setAttribute('data-number-color', 'zero');
        
        counterNumber.textContent = count;
    })
})


//Slider - single item slot//
//Local data for the slides//
const singleSliderSlides = [
    {
        id: 1,
        img: "imgs/photo-dummy-01.png",
        title: "Mister Muffin",
        text: "Yes, hi, hello. This is a typing cat. Wonderful, isn't it? Now what to type here, ah yes, hm. Feed me please.",
    },
    {
        id: 2,
        img: "imgs/photo-dummy-02.png",
        title: "Komo",
        text: "I like cookies.",
    },    
    {
        id: 3,
        img: "imgs/photo-dummy-03.png",
        title: "Circle thing",
        text: "I'm the moon, nice, no? I like to stargaze.",
    },    
    {
        id: 4,
        img: "imgs/photo-dummy-04.png",
        title: "Tree",
        text: "... ... ... (I'm a tree, I can't talk you silly)",
    },    
    {
        id: 5,
        img: "imgs/photo-dummy-05.png",
        title: "Pira and Mid",
        text: "Why are you always first in frame? I deserve space too ya know.",
    },    
];

//Slider parts//
const img = document.querySelector("#avatar-photo");
const title = document.querySelector("#title-text");
const text = document.querySelector("#description-text");

const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");
const btnRandom = document.querySelector(".btn-random");

let slideNumber = 0;

//Functionality for data and slide update//
window.addEventListener('DOMContentLoaded', e => {
    updateCurrentSlide(slideNumber); 
});

function updateCurrentSlide(){
    const slideItem = singleSliderSlides[slideNumber];
    img.src = slideItem.img;
    title.textContent = slideItem.title;
    text.textContent = slideItem.text;
}

//Slider buttons//
btnNext.addEventListener('click', e=> {
    slideNumber++;
    if (slideNumber > singleSliderSlides.length - 1) {
        slideNumber = 0;
    }
    updateCurrentSlide();
});

btnPrevious.addEventListener('click', e=> {
    slideNumber--;
    if(slideNumber < 0) {
        slideNumber = singleSliderSlides.length -1;
    }
    updateCurrentSlide();
});

btnRandom.addEventListener('click', e=> {
    slideNumber = Math.floor(Math.random() * singleSliderSlides.length);
    updateCurrentSlide();
});


//Modal//
const buttonCloseOne = document.querySelector(".btn-close-1");
const buttonModalOne = document.querySelector(".btn-modal-1");
const modalOne = document.querySelector(".modal-type-1");
const modalOneBackground = document.querySelector(".modal-background")

buttonModalOne.addEventListener('click', e=> {
    modalOne.setAttribute('data-modal-active', 'on');
});

buttonCloseOne.addEventListener('click', e=> {
    modalOne.setAttribute('data-modal-active', 'off');
});

window.onclick = function closeModal(poke) {
    if (poke.target === modalOneBackground) {
        modalOne.setAttribute('data-modal-active', 'off');
    }
};