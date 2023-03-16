function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const elCollection = document.querySelector('#boxes')

const inputEl = document.querySelector('input[type="number"]');
let size = 30;


function createBoxes(value) {
  const container = document.createElement("div")
  for (let i = 0; i < value ; i++) {
 
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

btnCreate.addEventListener('click', () => {createBoxes(inputEl.value)});

function destroyBoxes() {
  elCollection.innerHTML = '';
  inputEl.value = '';
  size = 30  
}

btnDestroy.addEventListener('click',destroyBoxes);