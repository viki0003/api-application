import React, { useContext, useState } from 'react';
import { CryptoContext } from '../../../APIHooks/CryptoContext';
import Pagination from '../../../Component/Pagination';
import Loader from '../../../Component/Loader';

const DataSection = () => {
    const { cryptos, loading, error } = useContext(CryptoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cryptos.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;

    return (
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
    )
}

export default DataSection