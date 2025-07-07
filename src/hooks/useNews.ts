import { useState, useEffect } from 'react';
import { NewsArticle, newsApi } from '../utils/newsApi';

interface UseNewsReturn {
  news: NewsArticle[];
  loading: boolean;
  error: string | null;
  refreshNews: () => Promise<void>;
  searchNews: (query: string) => Promise<void>;
}

export const useNews = (): UseNewsReturn => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const articles = await newsApi.fetchAllNews();
      setNews(articles);
    } catch (err) {
      setError('Failed to fetch news. Showing cached articles.');
      console.error('News fetch error:', err);
      // Use fallback news
      const fallbackNews = await newsApi.fetchAllNews();
      setNews(fallbackNews);
    } finally {
      setLoading(false);
    }
  };

  const refreshNews = async () => {
    await fetchNews();
  };

  const searchNews = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const articles = await newsApi.searchNews(query);
      setNews(articles);
    } catch (err) {
      setError('Failed to search news.');
      console.error('News search error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    news,
    loading,
    error,
    refreshNews,
    searchNews
  };
};
