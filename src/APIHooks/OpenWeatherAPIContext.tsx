"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Define the data type for weather data
type WeatherData = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
  name: string;
  sys: { country: string };
};

// Context type
interface WeatherAPIContextType {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => void;
}

// Create the context
const WeatherAPIContext = createContext<WeatherAPIContextType | undefined>(undefined);

// Provider component
export const WeatherAPIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: city,
          units: "metric",
          appid: "bf8821315d37bf4e17e7b3b298640fa3", // Replace with your API key
        },
      });
      setWeatherData(response.data);
    } catch (err) {
        console.error("An error occurred:", err); // Logs the error
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherAPIContext.Provider value={{ weatherData, loading, error, fetchWeather }}>
      {children}
    </WeatherAPIContext.Provider>
  );
};

// Hook to use the Weather API context
export const useWeatherAPI = () => {
  const context = useContext(WeatherAPIContext);
  if (context === undefined) {
    throw new Error("useWeatherAPI must be used within a WeatherAPIProvider");
  }
  return context;
};
