
const allCategories = document.querySelectorAll('.item');
function quantityList(array){
    return `Number of categories: ${array.length}`;
}
console.log(quantityList(allCategories));

const itemListEl = document.querySelectorAll('.item ul');
itemListEl.forEach((el,index) => {
    const titleEl = document.querySelectorAll('h2');
    console.log(`Category: ${titleEl[index].textContent}`)  
    const quantityOfLi = el.children;
    console.log(`Elements: ${quantityOfLi.length}`);
});