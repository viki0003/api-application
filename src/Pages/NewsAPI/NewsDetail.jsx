import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Component/Loader';

const NewsDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/everything",
                    {
                        params: {
                            q: "tesla",
                            from: "2024-09-25",
                            sortBy: "publishedAt",
                            apiKey: "b1d280f64651489fa18f30ebe6322892",
                        },
                    }
                );
                setArticle(response.data.articles[id]);
            } catch (error) {
                console.error("Error fetching article details:", error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return (
           <Loader/>
        );
    }

    return (
        <div>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>{article.title}</h1>

                </div>
            </div>
            <div className="data-section">
                <div className='container'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>{article.description}</p>
                        <p>Published at: {new Date(article.publishedAt).toLocaleDateString()}</p>
                        <p>Author: {article.author}</p>
                        <div>
                            <img src={article.urlToImage} alt={article.title} style={{ width: "100%", maxHeight: "400px", objectFit: 'cover', border: '2px solid #000', borderRadius: '5px' }} />
                        </div>
                        <p>{article.content}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
