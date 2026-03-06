import axios from 'axios';
import { Article, CategoryType, APIResponse } from '../types/news';
import { MOCK_NEWS } from './mockNews';

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';

export const newsService = {
    fetchNews: async (category: CategoryType, query?: string): Promise<Article[]> => {
        const topic = category === 'Hardware' || category === 'Software' ? 'technology' :
            category === 'Mercado' ? 'business' : 'world';

        const searchQuery = query || (category === 'Hardware' ? 'hardware' : '');

        try {
            if (!API_KEY) throw new Error('API Key missing');

            const response = await axios.get<APIResponse>(BASE_URL, {
                params: {
                    category: topic,
                    q: searchQuery,
                    apikey: API_KEY,
                    lang: 'es',
                },
            });
            return response.data.articles.map(article => ({
                ...article,
                category,
                id: article.url || Math.random().toString(36).substr(2, 9)
            }));
        } catch (error) {
            console.error(`GNews API Error:`, error);
            return MOCK_NEWS.filter(a =>
                (category === 'Tendencias' || a.category === category) &&
                (!query || a.title.toLowerCase().includes(query.toLowerCase()))
            );
        }
    },
};
