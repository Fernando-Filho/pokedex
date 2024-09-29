"use client";

import Header from "../components/Header/index";
import Main from "../components/Main/index";
import Footer from "../components/Footer/index";
import HomePageButton from "../components/Button/index";

import { useEffect, useState } from "react";

import fetchPokemonData from "./api";

export default function Page() {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("")
  const [typesPokemons, setTypesPokemons] = useState([])
  const [selectedPokemonType, setSelectedPokemonType] = useState("unknown");
  const [pokemonsByTypes, setPokemonsByTypes] = useState([]);
  

  const listPokemons = pokemonsByTypes.length !== 0 ? pokemonsByTypes : pokemons;

  useEffect(() => {
    handlePokemon();
    handleTypesPokemons();
  }, []);

  useEffect(() => {
    handlePokemonByType();
  }, [selectedPokemonType]);

  async function handlePokemon() {
    let res = await fetchPokemonData();
    setPokemons(res.results);
  }

  async function handleMorePokemon() {
    setSearchPokemon("");
    const morePokemon = (pokemons.length + 50)
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${morePokemon}`);
    setPokemons(res.results);
  }

  async function handleTypesPokemons() {
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/`);
    const handleType = res.results.map((type) => type.name);
    setTypesPokemons((handleType))
  }

  async function handlePokemonByType() {
    setSearchPokemon(" ");
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/${selectedPokemonType}`);
    const handlePokemon = res.pokemon.map((pokemonByType) => pokemonByType.pokemon);
    setPokemonsByTypes(handlePokemon);
    setSearchPokemon("");
  }

  return (
    <>
      <Header searchPokemon={searchPokemon}
              setSearchPokemon={setSearchPokemon}
              typesPokemons={typesPokemons}
              setTypesPokemons={setTypesPokemons}
              selectedPokemonType={selectedPokemonType}
              setSelectedPokemonType={setSelectedPokemonType}
              handlePokemonByType={handlePokemonByType}/>

      <Main listPokemons={listPokemons}
            fetchPokemonData={fetchPokemonData}
            searchPokemon={searchPokemon}
            handleMorePokemon={handleMorePokemon}/>
      <Footer/>

      <HomePageButton/>
    </>
  );
}
