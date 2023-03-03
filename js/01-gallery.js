import { galleryItems } from "./gallery-items.js";
// Change code below this line

const basicGalleryListRef = document.querySelector(".gallery");

const basicGalleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        target="_blank" rel="noopener noreferrer"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");

basicGalleryListRef.insertAdjacentHTML("beforeend", basicGalleryMarkup);

basicGalleryListRef.addEventListener("click", handlerGalleryItemClick);

function handlerGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  function handlerInstanceClose(e) {
    e.preventDefault();
    if (e.code === "Escape") {
      instance.close(
        window.removeEventListener("keydown", handlerInstanceClose)
      );
    }
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`
  );

  instance.show();

  window.addEventListener("keydown", handlerInstanceClose);
}
