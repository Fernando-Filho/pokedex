"use client";

import Header from "../components/Header/index";
import Main from "../components/Main/index";

// import CardPokemons from "../components/cardPokemon/index";

import { useEffect, useState } from "react";

import fetchPokemonData from "./api";

export default function Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    handlePokemon();
  }, []);

  async function handlePokemon() {
    let res = await fetchPokemonData();
    res = res.results;
    setPokemons(() => res);
  }

  return (
    <>
      <Header pokemons={pokemons}/>
      <Main pokemons={pokemons} fetchPokemonData={fetchPokemonData} />
    </>
  );
}
