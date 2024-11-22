"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";

// Define TypeScript types for Pokémon data
interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

const DataSection: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // State for all pokemons
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]); // State for filtered search results
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null); // State for selected pokemon
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const detailedPokemons = await Promise.all(
          response.data.results.map(
            async (pokemon: { name: string; url: string }) => {
              const res = await axios.get(pokemon.url);
              return res.data;
            }
          )
        );
        setPokemons(detailedPokemons); // Store the list of Pokémon with details
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(pokemons); // Show all pokemons when search term is empty
    } else {
      const filteredPokemons = pokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by name
      );
      setSearchResults(filteredPokemons); // Update search results
    }
  }, [searchTerm, pokemons]); // Only update when searchTerm or pokemons change

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon); // Set selected Pokémon details for viewing
  };

  const handlePageChange = (page: number) => setCurrentPage(page); // Handle page change for pagination

  // Slice the data for current page
  const currentItems = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  return (
    <div className="data-section max-w-container mx-auto pt-20">
      <div className="container">
        <div className="section-title">
          <h2>Pokémon List</h2>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Pokémon by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input border-2 border-[#263238] py-2 px-2 w-1/4 rounded-lg mt-3 mb-10"
        />

        {/* Display selected Pokémon details */}
        {selectedPokemon && (
          <div className="border-2 border-black overflow-hidden p-4 rounded-xl shadow-large bg-yellow-200 mb-10 w-[18rem]">
            <h3 className="text-[22px] font-bold">
              {selectedPokemon.name.charAt(0).toUpperCase() +
                selectedPokemon.name.slice(1)}
            </h3>
            <Image
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              width={150}
              height={150}
            />
            <div className="flex flex-col gap-2">
            <p>
              <strong>ID:</strong> {selectedPokemon.id}
            </p>
            <p>
              <strong>Types:</strong>{" "}
              {selectedPokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {selectedPokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            </div>
          </div>
        )}

        {/* List of Pokémon */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="data-card">
            <div className="grid grid-cols-2 gap-x-7 gap-y-7 lg:grid-cols-4 pb-10">
              {currentItems.map((pokemon) => (
                <div
                  className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 gap-4 rounded-lg shadow-md"
                  key={pokemon.id}
                  onClick={() => handlePokemonClick(pokemon)}
                >
                  <div className="flex gap-1">
                    <div className="">
                      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div className="circle">
                      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div className="circle">
                      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                  </div>
                  <div className="card__content">
                    <div>
                      <div className="card__title text-[22px] font-bold text-[#1c2869]">
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1)}
                      </div>
                      <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={150}
                        height={150}
                      />
                      <div className="card__subtitle">
                        <p>
                          <strong>ID:</strong> {pokemon.id}
                        </p>
                        <p>
                          <strong>Types:</strong>{" "}
                          {pokemon.types
                            .map((type) => type.type.name)
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1);
                  }
                }}
                className={currentPage === 1 ? "disabled" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1);
                  }
                }}
                className={currentPage === totalPages ? "disabled" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default DataSection;
