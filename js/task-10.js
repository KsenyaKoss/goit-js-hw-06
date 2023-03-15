function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const elCollection = document.querySelector('#boxes')

const inputEl = document.querySelector('input[type="number"]');
let inputValue = 0;


inputEl.addEventListener('blur', () => inputValue = parseInt(inputEl.value));


function createBoxes(inputValue) {
  const container = document.createElement("div")
  let size = 30;

  for (let i = 0; i < inputValue ; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "5px";
    container.appendChild(box);
    size += 10;
  }
elCollection.append(container);
}

btnCreate.addEventListener('click', createBoxes(5));

function destroyBoxes() {
  elCollection.innerHTML = '';
}

btnDestroy.addEventListener('click',destroyBoxes);