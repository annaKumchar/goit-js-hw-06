function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");

const changeBackgrounColor = (event) => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColorRef.textContent = color;
};

btnRef.addEventListener("click", changeBackgrounColor);
