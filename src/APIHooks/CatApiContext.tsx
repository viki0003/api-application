"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface CatData {
  id: string;
  url: string;
  breeds?: Array<Record<string, unknown>>; // Specify the structure if needed
  [key: string]: unknown; // Allow additional properties if the API provides them
}

interface CatApiContextType {
  catData: CatData[]; // Array of CatData objects
  error: string | null;
  loading: boolean;
  cattotalItems: number;
}

interface CatApiProviderProps {
  children: ReactNode; // Expect React children as props
}

const CatApiContext = createContext<CatApiContextType | undefined>(undefined);

const CatApiProvider: React.FC<CatApiProviderProps> = ({ children }) => {
  const [catData, setCatData] = useState<CatData[]>([]); // Specify `CatData[]` for the state
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get<CatData[]>("https://api.thecatapi.com/v1/images/search");
        setCatData(response.data); // Ensure response data matches CatData[]
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCatData();
  }, []);

  const cattotalItems = catData.length;

  return (
    <CatApiContext.Provider value={{ catData, error, loading, cattotalItems }}>
      {children}
    </CatApiContext.Provider>
  );
};

const useCatApi = (): CatApiContextType => {
  const context = useContext(CatApiContext);
  if (!context) {
    throw new Error("useCatApi must be used within a CatApiProvider");
  }
  return context;
};

export { CatApiProvider, useCatApi };
