import { useQuery } from '@tanstack/react-query';
import { newsService } from '../api/newsService';
import { Category } from '../types/news';

export const useNews = (category: Category, query?: string) => {
    return useQuery({
        queryKey: ['news', category, query],
        queryFn: () => newsService.fetchNews(category, query),
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        retry: 1,
    });
};
