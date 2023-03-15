const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
    const arrInputText = [...inputText.value];
    if(arrInputText.length !== parseInt(inputText.dataset.length)) {
    inputText.classList.add('invalid')
    inputText.classList.remove('valid')}
     else {
        inputText.classList.add('valid')
        inputText.classList.remove('invalid')
    };
    if(arrInputText.length === 0){
        inputText.classList.remove('valid');
        inputText.classList.remove('invalid');
    }
    });

