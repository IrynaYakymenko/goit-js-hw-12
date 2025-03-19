import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export const createImageCard = image => {
    return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    data-source="${image.largeImageURL}"
                    alt="${image.tags}"
                />
                </a> 
                <div class="describe">
                <div class="info">
                    <span class="label">Likes</span><br>
                    <span class="value" data-likes>${image.likes}</span>
                </div>
                <div class="info">
                    <span class="label">Views</span></span><br>
                    <span class="value" data-views>${image.views}</span>
                </div>
                <div class="info">
                    <span class="label">Comments</span><br>
                    <span class="value" data-comments>${image.comments}</span>
                </div>
                <div class="info">
                    <span class="label" >Downloads</span><br>
                    <span class="value" data-downloads>${image.downloads}</span>
                </div>  
                </div>
        </li>
    `;
  };

export const renderGallery = (images, galleryRef) => {
    const imageCards = images.map(img => createImageCard(img)).join('');
        galleryRef.insertAdjacentHTML('beforeend', imageCards);

        if (!lightbox) {
            lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
        } else {
            lightbox.refresh();
        }

};

export const clearGallery = galleryRef => {
    galleryRef.innerHTML = '';
};