//-----Randomize rgb and hsl-----//
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


//-----Simple counter-----//
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


//-----Slider - single item slot-----//
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


//-----Modal-----//
//Modal 1//
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

//Modal 2//
const buttonModalTwo = document.querySelector(".btn-modal-2");
const buttonCloseTwo = document.querySelector(".btn-close-2");
const modalTwo = document.querySelector("#modal-dialog");

buttonModalTwo.addEventListener('click', e=>{
    modalTwo.showModal();
})

buttonCloseTwo.addEventListener('click', e=> {
    modalTwo.close();
})

// window.onclick = function closeModalTwo(click) {
//     if (click.target === modalTwo) {
//         modalTwo.close();
//     }
// };


//-----Open and Close-----//

//Setup 1//
const buttonToggle = document.querySelector(".btn-question");
const questionButtons = document.querySelectorAll(".btn-question");
const answerQuestions = document.querySelectorAll(".answer-status");
const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach(singleQuestion => {
    const nearestButton = singleQuestion.querySelector(".btn-question");
    const nearestAnswer = singleQuestion.querySelector(".answer-status");
    nearestButton.addEventListener('click', e => {
        if (nearestButton.textContent === 'Show'){
            nearestButton.textContent = 'Close';            
            nearestAnswer.setAttribute('data-answer-status', 'show');
        } else {
            nearestButton.textContent = 'Show';
            nearestAnswer.setAttribute('data-answer-status', 'hide');
        }
        questionCards.forEach(check => {
            if (check !== singleQuestion && nearestButton.textContent === 'Close') {                
                check.querySelector('.btn-question').textContent = 'Show';
                check.querySelector('.answer-status').setAttribute('data-answer-status', 'hide');
            }
        })
    })
})

//Setup 2//
const buttonToggle2 = document.querySelector(".btn-question2");
const questionButtons2 = document.querySelectorAll(".btn-question2");
const answerQuestions2 = document.querySelectorAll(".answer-status2");
const questionCards2 = document.querySelectorAll(".question-card2");

questionButtons2.forEach(singleButton => {
    singleButton.addEventListener('click', e=> {
        const nearestAnswer = singleButton.closest('.question-card2').querySelector('.answer-status2');
        if (singleButton.textContent === 'Show') {
            singleButton.textContent = 'Close';            
            nearestAnswer.setAttribute('data-answer-status', 'show');
        } else if (singleButton.textContent === 'Close'){
            singleButton.textContent = 'Show';
            nearestAnswer.setAttribute('data-answer-status', 'hide');
        }
        //to solve close other when clicking one button text//
        // questionButtons.forEach(check => {
        //     if (check !== singleButton){
        //         const crossCheck = check.parentElement.querySelector('.answer-status');
        //         crossCheck.setAttribute('data-answer-status', 'hide');
        //         if (singleButton.textContent === 'Close' && crossCheck.getAttribute !== 'show'){
                    
        //         }
        //         if (crossCheck.getAttribute === 'hide'){
        //             singleButton.textContent = 'Show';
        //         } else if (crossCheck.getAttribute === 'show'){
        //             singleButton.textContent = 'Close';
        //         }                
        //     }
        // })
    })
});

//Single button, working code//
// buttonToggle.addEventListener('click', e=> {
//     if (buttonToggle.textContent === 'Show') {
//         buttonToggle.textContent = 'Close'
//         answerQuestion.setAttribute('data-answer-status', 'show');
//         console.log('cake')
//     } else {
//         buttonToggle.textContent = 'Show'
//         answerQuestion.setAttribute('data-answer-status', 'hide');
//         console.log('lemon')
//     }    
// })

// buttonToggle.addEventListener('click', e => {
//     if (answerQuestion.getAttribute('data-answer-status') === 'hide') {
//         answerQuestion.setAttribute('data-answer-status', 'show');
//         buttonToggle.textContent = 'Close';
//         console.log('peanut')
//     } else if (answerQuestion.getAttribute('data-answer-status') === 'show') {
//         answerQuestion.setAttribute('data-answer-status', 'hide');
//         buttonToggle.textContent = 'Show'
//         console.log('cookie');
//     }
// })


//-----Sorting items project-----//

//Local data
const sortingItems = [
    {
        id: 1,
        category: "Cat",
        title: "Cat",        
        description: "I'm a cat",
        img: "imgs-for-sort/amber-kipp-75715CVEJhI-unsplash.jpg",
    },
    {
        id: 2,
        category: "Cat",
        title: "Cat",        
        description: "I'm a cat",
        img: "imgs-for-sort/kanashi-BLW_KQ0Rkn0-unsplash.jpg",
    },
    {
        id: 3,
        category: "Cat",
        title: "Cat",        
        description: "I'm a cat",
        img: "imgs-for-sort/max-simonov-fU4YA9w5taw-unsplash.jpg",
    },
    {
        id: 4,
        category: "Lizard",
        title: "Lizard",        
        description: "I'm a lizard",
        img: "imgs-for-sort/keith-markilie-0EebGYVIBmA-unsplash.jpg",
    },
    {
        id: 5,
        category: "Lizard",
        title: "Lizard",        
        description: "I'm a lizard",
        img: "imgs-for-sort/verdian-chua-68hC4vYTSFo-unsplash.jpg",
    },
    {
        id: 6,
        category: "Lizard",
        title: "Lizard",        
        description: "I'm a lizard",
        img: "imgs-for-sort/francesco-ungaro-JHypHcOObf4-unsplash.jpg",
    },
    {
        id: 7,
        category: "Bird",
        title: "Bird",        
        description: "I'm a bird",
        img: "imgs-for-sort/austin-guhl-3pZ9HITiLZM-unsplash.jpg",
    },
    {
        id: 8,
        category: "Bird",
        title: "Bird",        
        description: "I'm a bird",
        img: "imgs-for-sort/kevin-mueller-aeNg4YA41P8-unsplash.jpg",
    },
    {
        id: 9,
        category: "Bird",
        title: "Bird",        
        description: "I'm a bird",
        img: "imgs-for-sort/ronan-furuta-8hIErEH5pr0-unsplash.jpg",
    },
]

//Places where the local data will be placed on the page
const itemsBox = document.querySelector(".items-box");
const btnSortBox = document.querySelector(".btn-box-sorting");

//Loads the buttons and divs made from the local data
window.addEventListener('DOMContentLoaded', e=> {
    displaySortBtns();
    displayAnimals(sortingItems);       
});

//Makes dynamic buttons from the local data
function displaySortBtns(){
    const categories = sortingItems.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["All"]);

    const categoryBtns = categories.map(function(category){
        return `<button class="btn-activate btn-sort" data-animal="${category}">${category}</button>`
    }).join("");

    btnSortBox.innerHTML = categoryBtns;

    const sortButtons = btnSortBox.querySelectorAll(".btn-sort");

    sortButtons.forEach(soloBtn => {
        soloBtn.addEventListener('click', e=>{
            const categoryType = e.currentTarget.dataset.animal;
            const soloCategory = sortingItems.filter(function(soloItem){
                if(soloItem.category === categoryType){
                    return soloItem;
                };         
            });
            if(categoryType === 'All'){
                displayAnimals(sortingItems);
            }
            else{
                displayAnimals(soloCategory);                
            }
        });
    });    
}

//Makes dynamic divs from the local data
function displayAnimals(sortingItems){
    let animalBunch = sortingItems.map(item => {        
        return `<div class="base-sorting-item">
                    <div class="img-list-item">
                        <img class="list-item-photo" src="${item.img}" alt="${item.title}">
                    </div>                        
                    <div class="list-item-text">
                        <h3 class="title">${item.title}</h3>
                        <p class="description">${item.description}</p>
                    </div>
                    <span class="list-stripe"></span>
                </div>`;
    });
    animalBunch = animalBunch.join("");
    itemsBox.innerHTML = animalBunch;
}
//To add? Color button change depending on selected 


//-----Video with overlay and preloader-----//
const videoButton = document.querySelector('.button-pauze-start');
const backgroundVideo = document.querySelector('.video-item');
const buttonPauze = document.querySelector('.btn-pauze');
const buttonStart = document.querySelector('.btn-start');
const preloaderVideo = document.querySelector('.preloader-video');

videoButton.addEventListener('click', e=> {
    if (buttonPauze.getAttribute('data-btn-controls-active') === 'on'){
        buttonPauze.setAttribute('data-btn-controls-active', 'off');
        buttonStart.setAttribute('data-btn-controls-active', 'on');
        backgroundVideo.pause();
    } else if (buttonPauze.getAttribute('data-btn-controls-active') === 'off'){
        buttonPauze.setAttribute('data-btn-controls-active', 'on');
        buttonStart.setAttribute('data-btn-controls-active', 'off');
        backgroundVideo.play();
    }    
});

window.addEventListener('load', e=> {
    preloaderVideo.classList.add("preloader-hide");
});


//-----Pie chart-----//
//Static pie chart//
const staticCanvas = document.querySelector("#static-pie");
const canvasShape = staticCanvas.getContext("2d");

const staticInputs = [
    {
        id: 0,
        type: "Apple",
        amount: 289,
        color: "green",
    },
    {
        id: 1,
        type: "Orange",
        amount: 147,
        color: "orange",
    },
    {
        id: 2,
        type: "Lemon",
        amount: 208,
        color: "yellow",
    },
    {
        id: 3,
        type: "Strawberry",
        amount: 99,
        color: "red",
    },
    {
        id: 4,
        type: "Blueberry",
        amount: 114,
        color: "darkblue",
    },
]

let sumOfFruits = 0;
let allTheFruits = staticInputs.reduce((sumOfFruits, {amount}) => sumOfFruits + amount, 0);
let currentAngle = 0;

for (let pieSlice of staticInputs) {
    let anglePart = (pieSlice.amount / allTheFruits) * 2 * Math.PI;
    canvasShape.beginPath();
    canvasShape.arc(200, 200, 200, currentAngle, currentAngle + anglePart);
    currentAngle += anglePart;
    canvasShape.lineTo(200, 200);
    canvasShape.fillStyle = pieSlice.color;
    canvasShape.fill();    
}
//To fit the pie onto the canvas, size canvas is sum of the two lineTo values//

//temp save
    // canvasShape.font = "20px Arial";
    // canvasShape.fillText(pieSlice.type, 200, 200);
    // canvasShape.textAlign = "center";


//-----Dynamic date-----//
//Current year//
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

//Current date//
const currentDate = document.querySelector("#current-date");
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

currentDate.textContent = `${day}-${month}-${year}`;

//Current date locale//
const currentDateLocale = document.querySelector("#current-date-locale");
currentDateLocale.textContent = new Date().toLocaleDateString("nl-NL");


//-----Tab switching-----//

//Setup 1//
const tabTop = document.querySelectorAll('[data-tab]');
const tabText = document.querySelectorAll('.tab-solo');

tabTop.forEach(pokeTab => {
    pokeTab.addEventListener('click', e=> {
        const targetTab = document.querySelector(pokeTab.dataset.tab);
        tabText.forEach(tabContent => {
            tabContent.classList.remove('tab-active');
        })
        tabTop.forEach(solo => {
            solo.classList.remove('tab-highlight-active');
        })
        pokeTab.classList.add('tab-highlight-active');
        targetTab.classList.add('tab-active');
    })
});

//Setup 2//
const tabItemBtns = document.querySelectorAll('.tab-item');
const tabItemTextBox = document.querySelector('.tab-item-text-s2');
const tabItemsContent = document.querySelectorAll('.tab-solo-s2');

tabItemTextBox.addEventListener('click', e=>{
    const checkId = e.target.dataset.idTab;
    if(checkId){
        tabItemBtns.forEach(soloTabBtn => {
            soloTabBtn.classList.remove('tab-highlight-active-s2');
            e.target.classList.add('tab-highlight-active-s2');
        });
        tabItemsContent.forEach(tabSoloSet2 => {
            tabSoloSet2.classList.remove('tab-active-s2');
        })

        const tabCheckId = document.getElementById(checkId);
        tabCheckId.classList.add('tab-active-s2');
    }
})


//-----Countdown-----//
const countdownMonths = [
    "January",
    "February",
    "March", 
    "April",
    "May",
    "June",
    "July", 
    "August",
    "September",
    "October", 
    "November", 
    "December",
];

const countdownWeekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday", 
    "Saturday",
    "Sunday",
];

const countdownBox = document.querySelector(".countdown-box");
const countdownTitle = document.querySelector(".countdown-title")
const countdownItems = document.querySelectorAll(".countdown-part p");

//Deadline date setup//
let deadlineDate = new Date("2024-08-17T12:00:00");
let anotherDeadlineDate = new Date(2024, 9, 12, 6, 0, 0) //Months run from 0-11//
console.log(deadlineDate, anotherDeadlineDate);

const deadlineYear = deadlineDate.getFullYear();
const deadlineDay = `TEMP`
const deadlineHours = deadlineDate.getHours();
const deadlineMinutes = deadlineDate.getMinutes();

countdownTitle.textContent = `Kitty Countdown ends on ${deadlineDay},  ${deadlineYear} ${deadlineHours}:${deadlineMinutes}.`



//-----Scroll to top or bottom of the page when corresponding button is clicked-----//
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");
const scrollCheck = document.documentElement;


btnUp.addEventListener('click', e=> {    
    scrollCheck.scrollTop = 0;
});

btnDown.addEventListener('click', e=>{
    scrollCheck.scrollTop = scrollCheck.scrollHeight;
})
