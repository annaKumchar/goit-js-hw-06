let counterValue = 0;

const counterRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');

buttonDecrementRef.addEventListener("click", () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
});
buttonIncrementRef.addEventListener("click", () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
});
