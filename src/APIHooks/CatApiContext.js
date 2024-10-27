import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CatApiContext = createContext();

const CatApiProvider = ({ children }) => {
    const [catData, setCatData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCatData = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search');
                setCatData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCatData();
    }, []);

    const cattotalItems = Array.isArray(catData) ? catData.length : 0;


    return (
        <CatApiContext.Provider value={{ catData, error, loading, cattotalItems }}>
            {children}
        </CatApiContext.Provider>
    );
};

const useCatApi = () => {
    return useContext(CatApiContext);
};

export { CatApiProvider, useCatApi };
