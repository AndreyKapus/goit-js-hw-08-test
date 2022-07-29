// Add imports above this line
import { galleryItems } from "./gallery-items";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join(" ");

galleryRef.insertAdjacentHTML("beforeend", galleryArray);

galleryRef.addEventListener("click", onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
