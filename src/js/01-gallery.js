// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const galleryItemsCardList = galleryItems
    .map(({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img class='gallery__image' src='${preview}' alt='${description}'>
        </a>
    </li>`)
    .join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryItemsCardList);
new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250});