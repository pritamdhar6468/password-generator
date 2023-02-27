const lengthSlider = document.querySelector(".pass-length input"),
generateBtn = document.querySelector(".generate-btn");


const generatePassword =() =>{
    let staticPassword = "";
}

const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.Value;
}
updateSlider();
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);