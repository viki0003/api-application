import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'inr',
                        order: 'market_cap_desc',
                        per_page: 100,
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

    const CryptototalItems = Array.isArray(cryptos) ? cryptos.length : 0;

    return (
        <CryptoContext.Provider value={{ cryptos, loading, error, CryptototalItems  }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default CryptoProvider;
