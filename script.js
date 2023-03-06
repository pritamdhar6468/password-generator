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
    let staticPassword = "",
    randomPassword="",
    excludeDuplicate = false,
    passLength = lengthSlider.value;
    options.forEach(option => {
        if(option.checked) {
            if(option.id !== "exc-duplicates" && option.id !== "spaces"){
                
                //adding particular key value from character object to staticpassword
                staticPassword += characters[option.id];
            }else if(option.id === "spaces" ){
                staticPassword += ` ${staticPassword} `;
            }else{
                excludeDuplicate = true;
            }
        }
    });
    for (let i=0; i<passLength; i++){
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
    }
}

const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.Value;
}
updateSlider();
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);