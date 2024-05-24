const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

// // console.log(ingredientsList);

const ingredientsItems = ingredients.map((ingredient) => {

  const item = document.createElement('li');

  item.textContent = ingredient;

  item.classList.add('item');

  console.log(item);
  
  return item;
  
});

ingredientsList.prepend(...ingredientsItems);