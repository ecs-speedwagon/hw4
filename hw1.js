// const gallery = document.querySelector('.js-gallery');
// const lightbox = document.querySelector('.js-lightbox');
// const lightboxImage = document.querySelector('.lightbox__image');
// const closeBtn = document.querySelector('[data-action="close-lightbox"]');
// const overlay = document.querySelector('.lightbox__overlay');

// function createGallery(items) {
//   let markup = '';
//   for (let i = 0; i < items.length; i++) {
//     let item = items[i];
//     markup +=
//       '<li class="gallery__item">' +
//       '<a class="gallery__link" href="' + item.original + '">' +
//       '<img class="gallery__image" src="' + item.preview + '" data-source="' +
//       item.original + '" alt="' + item.description + '" />' +
//       '</a>' +
//       '</li>';
//   }
//   gallery.innerHTML = markup;
// }


// function openModal(src, alt) {
//   lightbox.classList.add('is-open');
//   lightboxImage.src = src;
//   lightboxImage.alt = alt;
//   document.addEventListener('keydown', onEscKeyPress);
// }


// function closeModal() {
//   lightbox.classList.remove('is-open');
//   lightboxImage.src = '';
//   lightboxImage.alt = '';
//   document.removeEventListener('keydown', onEscKeyPress);
// }


// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// }


// gallery.addEventListener('click', function (event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   let source = event.target.getAttribute('data-source');
//   let alt = event.target.getAttribute('alt');
//   openModal(source, alt);
// });


// closeBtn.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);
// createGallery(gallery);

