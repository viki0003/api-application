import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Pagination from '../../Component/Pagination';
import Loader from '../../Component/Loader';

const CryptoAPI = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Change this value to display more/less items per page

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'inr',
                        order: 'market_cap_desc',
                        per_page: 100, // Fetch more items to support pagination
                        page: 1,
                        sparkline: false,
                    },
                });
                setCryptos(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptos();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cryptos.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(cryptos.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <div> <Loader/></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>All About <strong>Crypto API</strong></h1>
                    <p>
                        This API is free and provides comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies with their name, current price, and price change percentage over the last 24 hours.
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
                        <h2>Cryptocurrency Prices</h2>
                    </div>

                    <div className="data-card">
                        <div className="data-card-layout d-flex flex-column justify-content-center">
                            <div className='dc-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Name</th>
                                            <th>Current Price (USD)</th>
                                            <th>24h Change (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((crypto) => (
                                            <tr key={crypto.id}>
                                                <td>{crypto.market_cap_rank}</td>
                                                <td>
                                                    <div className='crypto-logo-ui'>
                                                        <img src={crypto.image} alt={crypto.name} width={30} height={30} />
                                                        {crypto.name}
                                                    </div>
                                                </td>
                                                <td>${crypto.current_price.toLocaleString()}</td>
                                                <td style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                                                    {crypto.price_change_percentage_24h.toFixed(2)}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <Pagination 
                                totalItems={cryptos.length} 
                                itemsPerPage={itemsPerPage} 
                                currentPage={currentPage} 
                                onPageChange={handlePageChange} 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CryptoAPI;
