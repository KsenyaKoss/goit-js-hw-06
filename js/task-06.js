// // Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// // Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// // Якщо введена правильна кількість символів,
//  то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// // Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
    const arrInputText = [...inputText.value];
    arrInputText.length !== parseInt(inputText.dataset.length) ? inputText.classList.add('invalid') : inputText.classList.add('valid');
});

