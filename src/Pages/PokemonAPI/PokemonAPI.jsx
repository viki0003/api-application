import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from '../../Component/Loader';
import Pagination from "../../Component/Pagination";

const PokemonAPI = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon) => {
                        const pokemonDetails = await axios.get(pokemon.url);
                        return pokemonDetails.data;
                    })
                );
                setPokemons(pokemonData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        fetchPokemons();
    }, []);


    const handlePageChange = (page) => setCurrentPage(page);

    const currentItems = pokemons.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) {
        return (
            <Loader/>
        );
    }
    return (
        <>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>All About <strong>Pokemon API</strong></h1>
                    <p>
                        PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy.
                        PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.
                    </p>
                    <Link className="cta">
                        <span>Check More</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className='data-section'>
                <div className='container'>
                    <div className="section-title">
                        <h2>Pokemon List</h2>
                    </div>
                    <div className="data-card">
                        <div className="data-card-layout">

                            {currentItems.map((pokemon) => (
                                <div key={pokemon.id} className="card">
                                    <div className="card__title" style={{margin:'0px'}}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                                    <img
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        width="150"
                                        height="150"
                                    />
                                    <div className="card__subtitle">
                                        <p><strong>ID:</strong> {pokemon.id}</p>
                                        <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
                                        <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <Pagination
                            totalItems={pokemons.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonAPI