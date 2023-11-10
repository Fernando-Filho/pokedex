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
  const [typesPokemons, setTypesPokemons] = useState(["all"])
  const [selectedPokemonType, setSelectedPokemonType] = useState('');
  const [pokemonsByTypes, setPokemonsByTypes] = useState([]);

  const listPokemons = pokemonsByTypes.length !== 0 ? pokemonsByTypes : pokemons;

  useEffect(() => {
    handlePokemon();
    handleTypesPokemons();
  }, []);

  async function handlePokemon() {
    let res = await fetchPokemonData();
    res = res.results;
    setPokemons(() => res);
  }

  async function handleMorePokemon() {
    setSearchPokemon("");
    const morePokemon = (pokemons.length + 50)
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${morePokemon}`);
    res = res.results;
    setPokemons(() => res);
  }

  async function handleTypesPokemons() {
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/`);
    res = res.results;
    const handleType = res.map((type) => type.name);
    
    setTypesPokemons(() => handleType)
  }

  async function handlePokemonByType() {
    if(searchPokemon == "") {
      return
    }
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/${searchPokemon.toLowerCase()}`);
    setSearchPokemon("");
    res = res.pokemon;
    const handlePokemon = res.map((pokemonByType) => pokemonByType.pokemon);

    setPokemonsByTypes(() => handlePokemon)
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
