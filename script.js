const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelector(".option input"),
generateBtn = document.querySelector(".generate-btn");


const generatePassword =() =>{
    let staticPassword = "";

    options.forEach(option => {
        if(option.checked) {
            console.log(option);
        }
    });
}

const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.Value;
}
updateSlider();
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);