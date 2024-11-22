"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios, { AxiosError } from "axios";

// Define the Trivia API Response type
interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// Define the Context Type
interface TriviaApiContextType {
  triviaData: TriviaQuestion[];
  loading: boolean;
  error: string | null;
  totalItems: number;
}

// Define Props for the Provider
interface TriviaApiProviderProps {
  children: ReactNode;
}

// Create the Context
const TriviaApiContext = createContext<TriviaApiContextType | null>(null);

const TriviaApiProvider: React.FC<TriviaApiProviderProps> = ({ children }) => {
  const [triviaData, setTriviaData] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Trivia Data
  const fetchTriviaData = async (retryCount = 50): Promise<void> => {
    try {
      const response = await axios.get<{ results: TriviaQuestion[] }>(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      setTriviaData(response.data.results);
      setLoading(false);
    } catch (err: unknown) {
      // Type the error object
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 429 && retryCount > 0) {
        setTimeout(() => fetchTriviaData(retryCount - 1), 2000); // Retry after 2 seconds
      } else {
        setError(axiosError.message || "An unknown error occurred");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTriviaData();
  }, []);

  const totalItems = triviaData.length;

  return (
    <TriviaApiContext.Provider value={{ triviaData, loading, error, totalItems }}>
      {children}
    </TriviaApiContext.Provider>
  );
};

// Custom Hook to Consume the Context
const useTriviaApi = (): TriviaApiContextType => {
  const context = useContext(TriviaApiContext);
  if (!context) {
    throw new Error("useTriviaApi must be used within a TriviaApiProvider");
  }
  return context;
};

export { TriviaApiProvider, useTriviaApi };
