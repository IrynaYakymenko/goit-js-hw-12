import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery, clearGallery } from './js/render-functions';
import { fetchData } from './js/pixabay-api';

let currentPage = 1;
let currentQuery = '';

const refs = {
    searchForm: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more'),
};

const onSearchImage = async event => {
    event.preventDefault();
    
    const query = event.currentTarget.elements["search-text"].value.trim();
    if (query === '') {
        iziToast.warning({
            title: 'Warning',
            message: 'Поле не має бути порожнім!',
            position: 'topRight'
        });
        return;
    }

    currentQuery = query;
    currentPage = 1;
    clearGallery(refs.gallery);
    refs.loadMoreBtn.classList.add('is-hidden');
    await loadImages(true);
};

const loadImages = async (isNewSearch = false) => {
    try {
        refs.loader.classList.remove('hidden');
        const data = await fetchData(currentQuery, currentPage);
        
        if (data.hits.length === 0) {
            iziToast.warning({
                title: 'Warning',
                message: 'Sorry, no images found. Please try again!',
                position: 'topRight'
            });
            return;
        }

        renderGallery(data.hits, refs.gallery);

        if (currentPage > 1) {
            setTimeout(() => {
                const galleryHeight = refs.gallery.getBoundingClientRect().height;
                window.scrollBy({ top: galleryHeight * 2, behavior: 'smooth' });
            }, 300);
        }
        
        const totalPages = Math.ceil(data.totalHits / 15);
        if (currentPage >= totalPages) {
            refs.loadMoreBtn.classList.add('is-hidden');
            iziToast.info({
                title: 'End of results',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        } else {
            refs.loadMoreBtn.classList.remove('is-hidden');
        }

        currentPage++;
    } catch (err) {
        console.log(err);
    } finally {
        refs.loader.classList.add('hidden');
    }
};

refs.searchForm.addEventListener('submit', onSearchImage);
refs.loadMoreBtn.addEventListener('click', loadImages);

