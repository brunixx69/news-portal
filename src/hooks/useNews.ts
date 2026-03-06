import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '../api/mockNewsApi';
import { Category } from '../types/news';

export const useNews = (category: Category, query?: string) => {
    return useQuery({
        queryKey: ['news', category, query],
        queryFn: () => fetchArticles(category, query),
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        retry: 1,
    });
};
