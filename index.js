let rangeSlider = document.getElementById("rangeSlider");
let coloredSlider = document.getElementById("colored-slider");

rangeSlider.addEventListener("input", function() {
    coloredSlider.textContent = rangeSlider.value;
});