import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY,
    },
});

export const searchRecipes = async (query, filters = {}) => {
    try {
        const params = {
            query,
            addRecipeInformation: true,
            number: 12,
            ...filters,
        };
        const response = await api.get('/complexSearch', { params });
        return response.data;
    } catch (error) {
        console.error('Error searching recipes:', error);
        throw error;
    }
};

export const getRecipeDetails = async (id) => {
    try {
        const response = await api.get(`/${id}/information`);
        return response.data;
    } catch (error) {
        console.error('Error getting recipe details:', error);
        throw error;
    }
};

export default api;
