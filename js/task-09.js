function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
btnChangeColor.addEventListener('click', () => {
  let currentColor = getRandomHexColor()
  const backgroundColor = currentColor;
  document.body.style.backgroundColor = backgroundColor;
  colorName.textContent = `- ${currentColor}`;
});