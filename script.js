const lengthSlider = document.querySelector(".pass-length input");
const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.Value;
}

lengthSlider.addEventListener("input", updateSlider);