const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


 output.textContent = "Amonimus"

nameInput.addEventListener("input", (event) => {
   const inputText = event.currentTarget.value.trim();
    if (inputText) {
        output.textContent = inputText;
    } else {
        output.textContent = "Amonimus";
    }
});
