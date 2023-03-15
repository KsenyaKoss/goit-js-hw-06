const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncreament = document.querySelector('button[data-action="increment"]')
const counter = document.querySelector('#value');
let counterValue = 0;

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});
btnIncreament.addEventListener('click',() => {
    counterValue ++;
    counter.textContent = counterValue});


