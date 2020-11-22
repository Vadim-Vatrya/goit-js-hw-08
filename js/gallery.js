

import galleryItems from './gallery-items.js'

const refs = {
  jsGallery: document.querySelector('ul.js-gallery'),
  jsLightbox: document.querySelector('div.lightbox'),
  lightboxImg: document.querySelector('img.lightbox__image'),
  closeLightbox: document.querySelector(
    '.lightbox button[data-action="close-lightbox"]',
  ),
  lightboxOverlay: document.querySelector('.lightbox__overlay')
};
 


const galleryEl = ({ preview, original, description },i) => {
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
      data-index="${i}"
    />
  </a>
</li>`;
};

// console.log(galleryEl);

const makeGalleryElMarkup = galleryItems.map(galleryEl).join('');
refs.jsGallery.insertAdjacentHTML('beforeend', makeGalleryElMarkup);


refs.jsGallery.addEventListener('click', onOpenModal);
refs.closeLightbox.addEventListener('click', onCloseModal);
refs.lightboxOverlay.addEventListener('click', onClickOverlay);


function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };
  window.addEventListener('keydown', onKeyPress);
  refs.jsLightbox.classList.add('is-open');
  refs.jsLightbox.src = event.target.dataset.source;
  refs.jsLightbox.alt = event.target.alt;  
};



function onCloseModal() {
  window.removeEventListener('keydown', onKeyPress);
  refs.jsLightbox.classList.remove('is-open');
  refs.jsLightbox.src = '';
  refs.jsLightbox.alt = '';
};

function onClickOverlay(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  };
};

function onKeyPress(event) {
  if (event.code !== 'Escape') {
    return
  };
    onCloseModal();
  
};

// import gallerysItems from './gallery-items.js'

// const galerysEl = ({ preview, original, description }) => {
//     return `<li class="gallery__item">
//     <a
//         class="gallery__link"
//         href="${original}"
//     >
//         <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//         />
//     </a>
// </li>`;
// };

// const makeGaleryElementMorkup = gallerysItems.map(galerysEl).join('');
// const refs = {
//     gallery: document.querySelector('ul.js-gallery'),
//     modal: document.querySelector('div.lightbox'),
//     image: document.querySelector('img.lightbox__image'),
//     overley: document.querySelector('div.lightbox__overlay'),
//     closeModal: document.querySelector('.lightbox__button'),
// };

// refs.gallery.innerHTML = makeGaleryElementMorkup;
// refs.gallery.addEventListener('click', onClickOpenImg);
// refs.closeModal.addEventListener('click', onClickCloseModal);
// refs.overley.addEventListener('click', onClickOverlayCloseModal);

// function onClickOpenImg(evt) {
//     evt.preventDefault()
//     if (evt.target.nodeName !== 'IMG') {
//         return;
//     }
//     window.addEventListener('keydown', onKeydownCloseModal);
    
//     refs.modal.classList.add('is-open');
//     refs.image.src = `${evt.target.dataset.source}`;
//     refs.image.alt = `${evt.target.alt}`;

//     window.addEventListener('keydown', onKeydowmSibling);
// };

// function onClickCloseModal() {
//     window.removeEventListener("keydown", onKeydownCloseModal);
//     window.removeEventListener('keydown', onKeydowmSibling);
//     refs.modal.classList.remove('is-open');
//     refs.image.src = "";
// };

// function onClickOverlayCloseModal(evt) {
//     if (evt.currentTarget !== evt.target) {
//         return;
//     };
//     onClickCloseModal();
// };

// function onKeydownCloseModal(evt) {
//     if (evt.code !== 'Escape') {
//         return
//     };
//     onClickCloseModal();
// };

// function onKeydowmSibling(evt) {
//     const currentEl = gallerysItems.findIndex(({ original }) => original === refs.image.src);
//     if (evt.code === 'ArrowRight') {
//         refs.image.src = `${gallerysItems[(currentEl + 1) % gallerysItems.length].original}`;
//     } else if (evt.code === 'ArrowLeft') {
//         if (currentEl === 0) {
//             refs.image.src = `${gallerysItems[(currentEl + gallerysItems.length - 1) % gallerysItems.length].original}`;
//         } else {
//             refs.image.src = `${gallerysItems[(currentEl - 1) % gallerysItems.length].original}`;
//         };
//     };
//     return
// };