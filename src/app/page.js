"use client";

import Header from "../components/Header/index";
import Main from "../components/Main/index";
import Footer from "../components/Footer/index";
import HomePageButton from "../components/Button/index";

// import CardPokemons from "../components/cardPokemon/index";

import { useEffect, useState } from "react";

import fetchPokemonData from "./api";

export default function Page() {
  const [searchPokemon, setSearchPokemon] = useState("")
  const [pokemons, setPokemons] = useState([]);

  const filteredPokemons = searchPokemon !== "" ? pokemons.filter((item) => item.name.includes(searchPokemon.toLowerCase())) : pokemons;

  useEffect(() => {
    handlePokemon();
  }, []);

  async function handlePokemon() {
    let res = await fetchPokemonData();
    res = res.results;
    setPokemons(() => res);
  }

  async function handleMorePokemon() {
    const morePokemon = (pokemons.length + 50)
    let res = await fetchPokemonData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${morePokemon}`);
    res = res.results;
    setPokemons(() => res);

  }

  return (
    <>
      <Header searchPokemon={searchPokemon}
              setSearchPokemon={setSearchPokemon}/>

      <Main pokemons={filteredPokemons}
            fetchPokemonData={fetchPokemonData}
            searchPokemon={searchPokemon}
            handleMorePokemon={handleMorePokemon}/>
      <Footer/>

      <HomePageButton/>
    </>
  );
}
