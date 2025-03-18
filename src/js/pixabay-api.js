import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchData = async (query, page = 1) => {
    return axios.get(`/api/?key=49388165-2207654a79f52bc7a4c348d65&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`);
};
