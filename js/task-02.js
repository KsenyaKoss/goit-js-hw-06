const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithIngredients = document.querySelector('#ingredients');
let itemElWithName = '';

ingredients.forEach(name => {
  itemElWithName += `<li class = 'item'>${name}</li>`
})

listWithIngredients.insertAdjacentHTML('afterbegin', itemElWithName)


