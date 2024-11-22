"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

// Define the structure of the data returned by the Dog API
interface DogImage {
  id: string;
  url: string;
  breeds: Array<{ name: string }>;
}

// Define the context type
interface DogApiContextType {
  dogImages: DogImage[];
  loading: boolean;
  error: string | null;
  dogTotalItems: number;
}

// Create the context
const DogApiContext = createContext<DogApiContextType | null>(null);

// Create the provider component
interface DogApiProviderProps {
  children: ReactNode;
}

const DogApiProvider: React.FC<DogApiProviderProps> = ({ children }) => {
  const [dogImages, setDogImages] = useState<DogImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.thedogapi.com/v1/images/search", {
          params: {
            limit: 10, // Number of images to fetch
          },
        });
        setDogImages(response.data);
        setError(null);
      } catch (err: unknown) {
        // Type guard for error object
        if (axios.isAxiosError(err)) {
          setError(err.message); // Handle Axios error
        } else if (err instanceof Error) {
          setError(err.message); // Handle generic errors
        } else {
          setError("An unknown error occurred"); // Handle unexpected cases
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  const dogTotalItems = dogImages.length;

  return (
    <DogApiContext.Provider value={{ dogImages, loading, error, dogTotalItems }}>
      {children}
    </DogApiContext.Provider>
  );
};

// Custom hook to use the DogApiContext
const useDogApi = (): DogApiContextType => {
  const context = useContext(DogApiContext);
  if (!context) {
    throw new Error("useDogApi must be used within a DogApiProvider");
  }
  return context;
};

export { DogApiProvider, useDogApi };
