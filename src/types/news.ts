export type Category = 'IA' | 'Software' | 'Hardware' | 'Cyberpunk' | 'Mercado' | 'Tendencias';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: Category;
  imageUrl: string;
  url?: string;
  source?: {
    name: string;
    url: string;
  };
}

export interface GNewsResponse {
  totalArticles: number;
  articles: NewsArticle[];
}
