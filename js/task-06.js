const textInput = document.querySelector("#validation-input");
const lengthInput = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(lengthInput)) {
    textInput.classList.remove("invalid");

  } else {
    textInput.classList.remove("valid");
    
  }
});
