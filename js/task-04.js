const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncreament = document.querySelector('button[data-action="increment"]')
const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
btnDecrement.addEventListener('click', () => counterValue.textContent -= 1);
btnIncreament.addEventListener('click',() => counterValue.textContent++);
