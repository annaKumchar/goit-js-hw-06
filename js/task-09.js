function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");

const changeBackgrounColor = (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();
};

btnRef.addEventListener("click", changeBackgrounColor);
