const nameInput = document.querySelector("#validation-input");
let output = ""


nameInput.addEventListener("blur", (event) => {
    output = event.currentTarget.value; 
    let inputLength = output.length;
    console.log(inputLength);

    if (inputLength - 6) {
     nameInput.setAttribute('class', "invalid")
  } else { nameInput.setAttribute('class', "valid") }

});

