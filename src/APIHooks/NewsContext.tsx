"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

// Define the structure of a single news item
interface NewsItem {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

// Define the context value structure
interface NewsContextType {
  todayNews: NewsItem[];
  loading: boolean;
  error: string | null;
  NewstotalItems: number;
}

// Props for the provider
interface NewsProviderProps {
  children: ReactNode;
}

// Create context with a default value of `null`
const NewsContext = createContext<NewsContextType | null>(null);

const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [todayNews, setTodayNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b1d280f64651489fa18f30ebe6322892"
        );
        setTodayNews(response.data.articles || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const NewstotalItems = todayNews.length;

  return (
    <NewsContext.Provider value={{ todayNews, loading, error, NewstotalItems }}>
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook that ensures the context is not null
const useNewsApi = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsApi must be used within a NewsProvider");
  }
  return context;
};

export { NewsProvider, useNewsApi };
