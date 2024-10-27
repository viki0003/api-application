import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=97');
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon) => {
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

    const PoketotalItems = Array.isArray(pokemons) ? pokemons.length : 0;

    return (
        <PokemonContext.Provider value={{ pokemons, loading, PoketotalItems }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;
