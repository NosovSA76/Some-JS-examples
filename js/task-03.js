const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.style.display = "flex";
gallery.style.justifyContent = "space-around";



const imagesMarkup = images.reduce(
  (markup, { url, alt }) =>
    markup + `<li><img src="${url}" alt="${alt}"></li>`,
  ''
);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

const listItem = document.querySelectorAll('li');
listItem.forEach((item) => {
  item.style.display = "block";
})

const imageItem = document.querySelectorAll('img');
console.log(imageItem);

imageItem.forEach((image) => {
  image.style.height = "300px";
  image.style.width = "300px";
})
  
