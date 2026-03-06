export type CategoryType = 'IA' | 'Software' | 'Hardware' | 'Cyberpunk' | 'Mercado' | 'Tendencias';

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: CategoryType;
  imageUrl: string;
  url?: string;
  source?: {
    name: string;
    url: string;
  };
}

export interface APIResponse {
  totalArticles: number;
  articles: Article[];
}
