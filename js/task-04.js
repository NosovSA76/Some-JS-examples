
let counterValue = 0 ;


const decreaseButton = document.querySelector("[data-action='decrement']");

// const valDecrem = decreaseBtn.textContent
// console.log(valDecrem)

const increaseButton = document.querySelector("[data-action='increment']");

// const valIncrem = increaseBtn.textContent
// console.log(valIncrem)


const counterDisplay = document.querySelector("#value");


decreaseButton.addEventListener("click", () => {
counterValue--;
counterDisplay.textContent = counterValue;
});

increaseButton.addEventListener("click", () => {
counterValue++;
counterDisplay.textContent = counterValue;
});


counterDisplay.textContent = counterValue;