import axios from 'axios';

const API_KEY = '49388165-2207654a79f52bc7a4c348d65';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchData = async (query, page = 1, per_page = 15) => {
    const params = {
        key: API_KEY,
        q: query,
        page: page,
        per_page: per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
    }
    try {
        const { data } = await axios.get('', { params });
        return data;
    } catch (error) {
        console.error('Error fetching data from Pixabay:', error);
        throw new Error('Failed to fetch data');
    }
};
