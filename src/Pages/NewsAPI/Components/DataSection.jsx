import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../../APIHooks/NewsContext";
import Pagination from "../../../Component/Pagination";

const DataSection = () => {

    const { todayNews, loading, error } = useContext(NewsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const currentItems = todayNews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading news: {error.message}</div>;


    return (
        <>
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
    )
}

export default DataSection;