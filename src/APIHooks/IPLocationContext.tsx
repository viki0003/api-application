// src/APIHooks/IPGeolocationAPIContext.tsx
"use client"

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

// Define the types for the context state
interface IPGeolocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  network: string;
  version: string;
  region_code:string;
  country_name:string;
  country_code_iso3:string;
  country_capital:string;
  country_tld:string;
  continent_code:string;
  postal:string;
  latitude:number;
  longitude:number;
  timezone:string;
  currency:string;
  asn:string;
  org:string;
  // You can expand this based on the actual API response fields.
  [key: string]: string | number | boolean | undefined; // Allow other fields to be added dynamically
}

interface IPGeolocationContextType {
  ipData: IPGeolocationData | null;
  error: string | null;
  loading: boolean;
}

// Create context with default value
const IPGeolocationContext = createContext<IPGeolocationContextType | null>(null);

interface IPGeolocationProviderProps {
  children: ReactNode;
}

const IPGeolocationProvider: React.FC<IPGeolocationProviderProps> = ({ children }) => {
  const [ipData, setIpData] = useState<IPGeolocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIPData = async () => {
      try {
        const response: AxiosResponse<IPGeolocationData> = await axios.get('https://ipapi.co/json/');
        setIpData(response.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          setError(err.message); // Error message if it's AxiosError
        } else if (err instanceof Error) {
          setError(err.message); // Error message for other types of errors
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchIPData();
  }, []);

  return (
    <IPGeolocationContext.Provider value={{ ipData, error, loading }}>
      {children}
    </IPGeolocationContext.Provider>
  );
};

const useIPGeolocation = () => {
  const context = React.useContext(IPGeolocationContext);
  if (!context) {
    throw new Error('useIPGeolocation must be used within an IPGeolocationProvider');
  }
  return context;
};

export { IPGeolocationProvider, useIPGeolocation };
