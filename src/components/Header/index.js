"use client"

import { HeaderContainer, Input, Button, ImageButton, SelectContainer } from "./style"

const Header = ({searchPokemon, setSearchPokemon, typesPokemons, setTypesPokemons, selectedPokemonType, setSelectedPokemonType, handlePokemonByType}) => {

    return (
        <HeaderContainer>
            <Input  type="text"
                    placeholder="Qual o seu Pokemon preferido?"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}/>

            <SelectContainer>
                <select id="PokemonType"
                        name="PokemonType"
                        value={selectedPokemonType}
                        onChange={(e) => setSelectedPokemonType(e.target.value)}>
                            <option value="unknown">Unknown</option>
                            {typesPokemons.map((typePokemon, index) => (
                                <option key={index} value={typePokemon}>{typePokemon}</option>
                            ))}
                </select>
            </SelectContainer>
        </HeaderContainer>
    )
}

export default Header;