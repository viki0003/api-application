"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios';

// Define the structure of a single crypto item
interface CryptoItem {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

// Define the context value structure
interface CryptoContextType {
  cryptos: CryptoItem[];
  loading: boolean;
  error: string | null;
  CryptototalItems: number;
}

// Props for the provider
interface CryptoProviderProps {
  children: ReactNode;
}

// Create context with a strict default value of `null`
const CryptoContext = createContext<CryptoContextType | null>(null);

const CryptoProvider: React.FC<CryptoProviderProps> = ({ children }) => {
  const [cryptos, setCryptos] = useState<CryptoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  const CryptototalItems = cryptos.length;

  return (
    <CryptoContext.Provider value={{ cryptos, loading, error, CryptototalItems }}>
      {children}
    </CryptoContext.Provider>
  );
};

// Custom hook that ensures the context is not null
const useCryptoApi = (): CryptoContextType => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('useCryptoApi must be used within a CryptoProvider');
  }
  return context;
};

export { CryptoProvider, useCryptoApi };
