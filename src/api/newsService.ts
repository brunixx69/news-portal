import axios from 'axios';
import { Article, Category, GNewsResponse } from '../types/news';
import { MOCK_NEWS } from './mockNews';

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';

export const newsService = {
    fetchNews: async (category: Category, query?: string): Promise<Article[]> => {
        // Map internal categories to GNews topics or search queries
        const topic = category === 'Hardware' || category === 'Software' ? 'technology' :
            category === 'Mercado' ? 'business' : 'world';

        const searchQuery = query || (category === 'Hardware' ? 'hardware' : '');

        try {
            if (!API_KEY) throw new Error('API Key missing');

            const response = await axios.get<GNewsResponse>(BASE_URL, {
                params: {
                    category: topic,
                    q: searchQuery,
                    apikey: API_KEY,
                    lang: 'es',
                },
            });
            return response.data.articles.map(article => ({ ...article, category }));
        } catch (error) {
            console.error(`GNews API Error for category "${category}":`, error);

            // Filter mock data by category
            const filteredMock = MOCK_NEWS.filter(
                a => a.category === category || category === 'Tendencias'
            );

            // If filter returns nothing, return at least 3 generic/recent news items
            if (filteredMock.length === 0) {
                console.warn(`No mock news found for category "${category}", returning default items.`);
                return MOCK_NEWS.slice(0, 3);
            }

            return filteredMock;
        }
    },
};
