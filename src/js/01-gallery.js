import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
// galleryList.addEventListener('click', onPicturelClick);

function renderGallery(items) {
  return items.map(({ preview, original, description }) => {
    return (`
      <li className="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
          />
        </a>
      </li>
    `);
  }).join('');
}

galleryList.insertAdjacentHTML("beforeend", renderGallery(galleryItems))

// function onPicturelClick(event) {
//   event.preventDefault()
//   if (event.target.className === 'gallery__image') {
//     // console.log("works");
//     // console.log("parentNpde", event.target.parentNode);
//     const instance = basicLightbox.create(`
//     <img src="${event.target.parentNode}" width="800" height="600">
// `)

// instance.show()
//   }
// }
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay:250
})