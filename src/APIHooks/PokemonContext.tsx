"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

// Define the structure of a Pokémon
interface Pokemon {
  id: number;
  name: string;
  abilities: Array<{ ability: { name: string; url: string } }>;
  sprites: { front_default: string | null };
  types: Array<{ type: { name: string } }>;
}

// Define the context value structure
interface PokemonContextType {
  pokemons: Pokemon[];
  loading: boolean;
  PoketotalItems: number;
}

// Props for the provider
interface PokemonProviderProps {
  children: ReactNode;
}

// Create context with a default value of `null`
const PokemonContext = createContext<PokemonContextType | null>(null);

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=97");
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon: { url: string }) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return pokemonDetails.data;
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const PoketotalItems = pokemons.length;

  return (
    <PokemonContext.Provider value={{ pokemons, loading, PoketotalItems }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Custom hook that ensures the context is not null
const usePokemonApi = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonApi must be used within a PokemonProvider");
  }
  return context;
};

export { PokemonProvider, usePokemonApi };
