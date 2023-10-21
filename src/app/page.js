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
    const res = await fetchPokemonData();
    setPokemons(() => res);
  }

  return (
    <>
      <Header/>
      <Main pokemons={pokemons} fetchPokemonData={fetchPokemonData} />
    </>
  );
}
