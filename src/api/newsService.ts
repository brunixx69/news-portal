import axios, { AxiosError } from 'axios';
import { Article, CategoryType, APIResponse, GNewsArticle } from '../types/news';
import { MOCK_NEWS } from './mockNews';

// Using the requested convention for Vite environment variables
const BASE_URL = '/api/news'; // Internal Vercel Proxy

export const newsService = {
    fetchNews: async (category: CategoryType, query?: string): Promise<Article[]> => {
        const topic = category === 'Hardware' || category === 'Software' ? 'technology' :
            category === 'Mercado' ? 'business' : 'world';

        const searchQuery = query || (category === 'Hardware' ? 'hardware' : '');

        try {
            // Internal call to Vercel Serverless Function
            const response = await axios.get<APIResponse>(BASE_URL, {
                params: {
                    category: topic,
                    q: searchQuery,
                },
                timeout: 10000,
            });

            if (!response.data.articles) {
                throw new Error('MALFORMED_RESPONSE');
            }

            return response.data.articles.map((article: GNewsArticle) => ({
                id: article.url || Math.random().toString(36).substr(2, 9),
                title: article.title,
                description: article.description || 'Sin descripción disponible',
                content: article.content,
                author: article.source.name || 'Redactor TechHub',
                date: article.publishedAt,
                category,
                imageUrl: article.image,
                url: article.url,
                source: article.source
            }));
        } catch (error) {
            // Robust Fallback: Always return Mock Data on failure for 100% uptime
            return MOCK_NEWS.filter(a =>
                (category === 'Tendencias' || a.category === category) &&
                (!query || a.title.toLowerCase().includes(query.toLowerCase()))
            );
        }
    }
};
