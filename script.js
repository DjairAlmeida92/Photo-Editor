const newImg = document.getElementById("newImg");
const inputFile = document.querySelector("input[type=file]");
const img = document.querySelector(".img-content img");
const ButtonsFilter = document.querySelectorAll(".filters-content button");
const range = document.querySelector("input[type=range]");
const spnRangeValue = document.getElementById("spnRangeValue");
const btnResetFilters = document.getElementById("btnResetFilters");
const btnSalvar = document.getElementById("btnSalvar");

let rotate;
let flipY;
let flipX;

let filterActive;

let filters;

btnResetFilters.onclick = () => init();

init();

function init() {
    filters = {
        Brightness: { value: 100, max: 200 },
        Contrast: { value: 100, max: 200 },
        Saturation: { value: 100, max: 200 },
        Grey: { value: 0, max: 200 },
        Inversion: { value: 0, max: 200 },
    };

    rotate = 0;
    flipY = 1;
    flipX = 1;

    filterActive = "Brightness";

    spnRangeValue.innerHTML = 100;
    range.max = 200;
    range.value = 100;

    img.style.transform = "";
    img.style.filter = "";

    document.querySelector(".active").classList.remove("active");
    document.getElementById("filterDefault").classList.add("active");
}

newImg.onclick = () => inputFile.click();

inputFile.onchange = () => loadNewImage();

function loadNewImage() {
    let file = inputFile.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
    }

    init();
}

function handleDirection(type) {
    if (type === "rotateRight") {
        rotate += 90;
    } else if (type === "rotateLeft") {
        rotate -= 90;
    } else if (type === "reflectY") {
        flipY = flipY === 1 ? -1 : 1;
    } else {
        flipX = flipX === 1 ? -1 : 1;
    }

    img.style.transform = `rotate(${rotate}deg) scale(${flipY}, ${flipX})`;
}