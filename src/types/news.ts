export type CategoryType = 'IA' | 'Software' | 'Hardware' | 'Cyberpunk' | 'Mercado' | 'Tendencias';

export interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

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
  articles: GNewsArticle[];
}
