import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Додайте необхідні імпорти тут

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = "none";

function loadMoreImages() {
  const imagesMarkup = galleryItems.map(({ original, preview, description }) =>
    `<li class="gallery__item">
      <a href="${original}" target="_blank">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </li>`
  ).join('');

  gallery.insertAdjacentHTML('beforeend', imagesMarkup);
}

loadMoreImages();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      loadMoreImages();
      observer.unobserve(entry.target);
      observer.observe(gallery.lastElementChild);
    }
  });
}, { threshold: 0.5 });

observer.observe(gallery.lastElementChild);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });





