"use client"

import { HeaderContainer, Input, Button, ImageButton } from "./style"

import { useEffect, useState } from "react";

const Header = ({searchPokemon, setSearchPokemon, typesPokemons, setTypesPokemons, selectedPokemonType, setSelectedPokemonType, handlePokemonByType}) => {
    

    // useEffect(() => {
    //     handleTypesPokemons();
    // },[]);

    // async function handleTypesPokemons() {
    //     let res = await fetchPokemonData(`https://pokeapi.co/api/v2/type/`);
    //     res = res.results;
    //     res.map((type) => (
    //         setTypesPokemons(...typesPokemons, type.name)
    //     ));       
    //   }

    console.log(typesPokemons)

    return (
        <HeaderContainer>
            <Input  type="text"
                    placeholder="Qual o seu Pokemon preferido?"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}/>

            <Button $backgroundcolorbytype={"var(--"+searchPokemon.toLowerCase()+")"}
                    onClick={handlePokemonByType}/>

            <div>
                {/* <label htmlFor="frutas">Escolha uma fruta:</label> */}
                <select id="PokemonType" name="PokemonType" onChange={(e) => setSelectedPokemonType(e.target.value)} value={selectedPokemonType}>
                <option value="all">All</option>
                {typesPokemons.map((typePokemon) => (
                    <option value={typePokemon}>{typePokemon}</option>
                ))}
                
                {/* <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option> */}
                </select>
                <p>Você escolheu: {selectedPokemonType}</p>
            </div>
        </HeaderContainer>
    )
}

export default Header;