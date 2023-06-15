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