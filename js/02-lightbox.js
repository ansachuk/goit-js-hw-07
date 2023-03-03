import { galleryItems } from "./gallery-items.js";
// Change code below this line

const sipleGalleryListRef = document.querySelector(".gallery");

const sipleGalleryMarkup = galleryItems
  .map(
    ({
      original,
      preview,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

sipleGalleryListRef.insertAdjacentHTML("beforeend", sipleGalleryMarkup);

sipleGalleryListRef.addEventListener("click", handlerGalleryItemClick);

function handlerGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    fadeSpeed: 400,
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.open();

  console.log(e);

  function handlerInstanceClose(e) {
    e.preventDefault();
  }

  window.addEventListener("keydown", handlerInstanceClose);
}
