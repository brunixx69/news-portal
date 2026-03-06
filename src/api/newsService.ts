import axios, { AxiosError } from 'axios';
import { Article, CategoryType, APIResponse, GNewsArticle } from '../types/news';
import { MOCK_NEWS } from './mockNews';

// Using the requested convention for Vite environment variables
const API_KEY = import.meta.env.VITE_API_KEY || import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/top-headlines'; // Secure Protocol confirmed

export const newsService = {
    fetchNews: async (category: CategoryType, query?: string): Promise<Article[]> => {
        const topic = category === 'Hardware' || category === 'Software' ? 'technology' :
            category === 'Mercado' ? 'business' : 'world';

        const searchQuery = query || (category === 'Hardware' ? 'hardware' : '');

        try {
            if (!API_KEY) {
                console.warn('CRITICAL: API Key is missing in environment variables.');
                throw new Error('CONFIG_ERROR');
            }

            const response = await axios.get<APIResponse>(BASE_URL, {
                params: {
                    category: topic,
                    q: searchQuery,
                    apikey: API_KEY,
                    lang: 'es',
                },
                timeout: 10000, // 10s timeout for stability
            });

            // Map GNews response to internal Article interface safely
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
            newsService.handleApiError(error);

            // Fallback to mock data for a seamless user experience
            return MOCK_NEWS.filter(a =>
                (category === 'Tendencias' || a.category === category) &&
                (!query || a.title.toLowerCase().includes(query.toLowerCase()))
            );
        }
    },

    handleApiError: (error: any) => {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            switch (status) {
                case 401:
                    console.error('SEC_ERROR [401]: Clave de API no autorizada o inválida.');
                    break;
                case 403:
                    console.error('SEC_ERROR [403]: Acceso prohibido. Revisa los permisos de tu cuenta GNews.');
                    break;
                case 429:
                    console.warn('LIMIT_ERROR [429]: Límite de peticiones alcanzado. Usando caché/mock data.');
                    break;
                default:
                    console.error(`NET_ERROR [${status || 'UNKNOWN'}]: Error en la conexión con GNews.`);
            }
        } else if (error.message === 'CONFIG_ERROR') {
            console.error('CORE_ERROR: Error de configuración en las variables de entorno.');
        } else {
            console.error('UNKNOWN_ERROR: Ha ocurrido un error inesperado en el servicio de noticias.');
        }
    }
};
