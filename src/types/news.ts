export type Category = 'Hardware' | 'Software' | 'Mercado' | 'Tendencias';

export interface NewsSource {
  name: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: NewsSource;
  category?: Category;
}

export interface GNewsResponse {
  totalArticles: number;
  articles: Article[];
}
