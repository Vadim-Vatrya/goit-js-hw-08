import galleryItems from './gallery-items.js'

const galleryEl = ({ preview, original, description }) => {
   return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

console.log(galleryEl)

const makeGalleryElMarkup = galleryItems.map(galleryEl).join('');
console.log(makeGalleryElMarkup)

// refs = {

// }