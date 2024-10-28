import React, { useContext, useState } from 'react';
import { PokemonContext } from '../../../APIHooks/PokemonContext';
import Loader from '../../../Component/Loader';
import Pagination from "../../../Component/Pagination";

const DataSection = () => {

    const { pokemons, loading } = useContext(PokemonContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handlePageChange = (page) => setCurrentPage(page);

    const currentItems = pokemons.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='data-section'>
            <div className='container'>
                <div className="section-title">
                    <h2>Pokemon List</h2>
                </div>
                <div className="data-card">
                    <div className="data-card-layout">
                        {currentItems.map((pokemon) => (
                            <div key={pokemon.id} className="card">
                                <div className="card__title" style={{ margin: '0px' }}>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </div>
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
    )
}

export default DataSection