const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelector(".option input"),
generateBtn = document.querySelector(".generate-btn");


const characters = {
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"!~@#$%^&890_=+<>?|",
}


const generatePassword =() =>{
    let staticPassword = "";

    options.forEach(option => {
        if(option.checked) {
            //adding particular key value from character object to staticpassword
            staticPassword += characters[option.id];
        }
    });
}

const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.Value;
}
updateSlider();
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);