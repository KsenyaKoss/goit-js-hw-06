const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();
  const elements = form.elements; 
  console.log(elements);
  const data = {}; 

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== 'submit') {
      if (!element.value) { 
        alert('All fields must be filled out.');
        return;
      }
      data[element.name] = element.value;
    }
  }
  console.log(data); 
  form.reset(); 
};


