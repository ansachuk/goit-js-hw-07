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

const lightbox = new SimpleLightbox(`.gallery__item`, {
  captionsData: "alt",
  captionDelay: 250,
});
