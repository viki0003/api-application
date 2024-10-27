// NewsContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
    const [todayNews, setTodayNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b1d280f64651489fa18f30ebe6322892");
                setTodayNews(response.data.articles || []);
            } catch (error) {
                console.error("Error fetching news data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <NewsContext.Provider value={{ todayNews, loading, error }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
