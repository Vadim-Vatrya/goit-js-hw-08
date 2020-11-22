

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
 


// const galleryEl = ({ preview, original, description },i) => {
//   return `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//       data-index="${i}"
//     />
//   </a>
// </li>`;
// };

// // console.log(galleryEl);

// const makeGalleryElMarkup = galleryItems.map(galleryEl).join('');
// refs.jsGallery.insertAdjacentHTML('beforeend', makeGalleryElMarkup);


refs.jsGallery.insertAdjacentHTML('beforeend', galleryItems.map(({ preview, original, description }, i) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-index="${i}">
    </a>
    </li>`)
    .join(''));




    
refs.jsGallery.addEventListener('click', onOpenModal);
refs.closeLightbox.addEventListener('click', onCloseModal);
refs.lightboxOverlay.addEventListener('click', onClickOverlay);




function addValueModal(event) {
  refs.lightboxImg.src = event.target.dataset.source;
  refs.lightboxImg.alt = event.target.alt;
};

function removeValueModal() {
  refs.lightboxImg.src = '';
  refs.lightboxImg.alt = '';
};

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  window.addEventListener('keydown', onKeyPress);
  window.addEventListener('keydown', onKeySibling);
  refs.jsLightbox.classList.add('is-open');
  addValueModal(event);
};



function onCloseModal() {
  window.removeEventListener('keydown', onKeyPress);
  window.removeEventListener('keydown', onKeySibling);
  refs.jsLightbox.classList.remove('is-open');
  removeValueModal()
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


function onKeySibling(event) { 
  let imageIndex = galleryItems.findIndex(({ original }) => original === refs.lightboxImg.src);

  if (event.code === "ArrowLeft") {
    if (imageIndex === 0) {
      imageIndex += galleryItems.length;
    }
    imageIndex -= 1;
  }

  if (event.code === "ArrowRight") {
    if (imageIndex === galleryItems.length - 1) {
      imageIndex -= galleryItems.length;
    }
    imageIndex += 1;
  }
  refs.lightboxImg.src = galleryItems[imageIndex].original;
}

