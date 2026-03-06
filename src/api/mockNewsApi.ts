import { Article, CategoryType } from '../types/news';
import { MOCK_ARTICLES } from './mockData';

/**
 * Simulates an asynchronous API fetch for news articles.
 * Includes a realistic delay and supports filtering by category and search query.
 */
export const fetchArticles = async (
    category?: CategoryType,
    query?: string
): Promise<Article[]> => {
    // Simulate network delay (800ms to 1500ms)
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    let filtered = [...MOCK_ARTICLES];

    if (category) {
        filtered = filtered.filter(article => article.category === category);
    }

    // Filter by query if provided
    if (query) {
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    return filtered;
};
