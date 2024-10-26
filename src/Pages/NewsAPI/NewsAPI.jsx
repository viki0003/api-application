import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../Component/Pagination";
import "./NewsAPI.css";

const NewsAPI = () => {
    const [todayNews, setTodayNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/everything?q=tesla&from=2024-09-25&sortBy=publishedAt&apiKey=b1d280f64651489fa18f30ebe6322892",
                    {
                        params: {
                            q: "tesla",
                            from: "2024-09-25",
                            sortBy: "publishedAt",
                            apiKey: "b1d280f64651489fa18f30ebe6322892",
                        },
                    }
                );
                setTodayNews(response.data.articles || []);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchNews();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0]; // Returns 'YYYY-MM-DD'
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const currentItems = todayNews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>All About <strong>NewsAPI</strong></h1>
                    <p>
                        Locate articles and breaking news headlines from news sources and blogs across the web with JSON API. News API is a simple, easy-to-use REST API.
                    </p>
                    <Link className="cta">
                        <span>Check More</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="data-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Today's News</h2>
                        <p>This is today's news</p>
                    </div>
                    <div className="data-card">
                        <div className="data-card-layout">
                            {currentItems.map((tnd, index) => (
                                tnd.title && tnd.description && tnd.publishedAt &&
                                !tnd.title.includes('[Removed]') &&
                                !tnd.description.includes('[Removed]') &&
                                !tnd.publishedAt.includes('[Removed]') && (
                                    <div key={index} className="card">
                                        <div className="card__wrapper">
                                            <p>{formatDate(tnd.publishedAt)}</p>
                                        </div>
                                        <div className="card__title">{tnd.title}</div>
                                        <div className="card__subtitle">{tnd.description}</div>
                                        <div>
                                            <Link to={`/news-api/${index + 1}`} target="_blank">Read More</Link>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        <Pagination
                            totalItems={todayNews.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsAPI;
