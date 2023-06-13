//Randomize rgb and hsl//

const boxColorRgb = document.querySelector(".box-color-rgb");
const btnRandomizeRgb = document.querySelector("#randomize-rgb");
const boxColorHsl = document.querySelector(".box-color-hsl");
const btnRandomizeHsl = document.querySelector("#randomize-hsl");
const hslTextNumber = document.querySelector(".hsl-number")

//rgb//



//hsl//
function randomHSL() {
    return "hsl" + "(" + Math.floor(Math.random()*359) + "," + Math.floor(Math.random()*99) + "%" + "," + Math.floor(Math.random()*99) + "%" + ")";
}

const hslNumber = randomHSL();

function checkHSLNumber() {
    hslTextNumber.textContent = randomHSL();
}

function startHSL() {
    boxColorHsl.style.backgroundColor = randomHSL();
}

btnRandomizeHsl.addEventListener("click", e => {    
    boxColorHsl.style.backgroundColor = randomHSL()
    checkHSLNumber();
    console.log(boxColorHsl);
})

startHSL();
checkHSLNumber();
// on page load a color