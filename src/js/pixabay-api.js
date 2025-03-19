import axios from 'axios';

const API_KEY = '49388165-2207654a79f52bc7a4c348d65';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
}

export const fetchData = async (query, page = 1) => {
    const {data} = await axios.get(`/?q=${query}&page=${page}`);
    return data;
};
