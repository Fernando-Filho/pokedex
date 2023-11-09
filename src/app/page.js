"use client";

import Header from "../components/Header/index";
import Main from "../components/Main/index";
import Footer from "../components/Footer/index";
import HomePageButton from "../components/Button/index";

import { useEffect, useState } from "react";

import fetchPokemonData from "./api";

export default function Page() {
  const [searchPokemon, setSearchPokemon] = useState("")
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsByTypes, setPokemonsByTypes] = useState([]);

  const filteredPokemons = searchPokemon !== "" ? pokemons.filter((item) => item.name.includes(searchPokemon.toLowerCase())) : pokemons;
  const listPokemons = pokemonsByTypes.length !== 0 ? pokemonsByTypes : filteredPokemons;

  useEffect(() => {
    handlePokemon();
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

  async function handlePokemonByType() {
    if(searchPokemon == "") {
      return
    }
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/${searchPokemon.toLowerCase()}`);
    setSearchPokemon("");
    res = res.pokemon;
    const newPokemons = res.map((pokemonByType) => pokemonByType.pokemon);

     setPokemonsByTypes(() => newPokemons)
    
  }


  return (
    <>
      <Header searchPokemon={searchPokemon}
              setSearchPokemon={setSearchPokemon}
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
