
const categoryItems = document.querySelectorAll('.item');


console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach((category) => {
  
  const categoryTitle = category.querySelector('h2');
  const categoryElements = category.querySelectorAll('li');

    
  console.log(" ");
  
  console.log(`Category: ${categoryTitle.textContent}`);
  
  console.log(`Elements: ${categoryElements.length}`);

});