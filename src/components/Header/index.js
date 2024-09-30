"use client"

import { HeaderContainer, ImagePokeBoll, Input, SelectContainer } from "./style"

const Header = ({searchPokemon, setSearchPokemon, typesPokemons, setTypesPokemons, selectedPokemonType, setSelectedPokemonType, handlePokemonByTypeOnClick, formatedName}) => {

    const imgPokeBoll = "pokeboll.png";

    return (
        <HeaderContainer>

            <ImagePokeBoll  src={imgPokeBoll} alt={`Imagem de uma PokeBola`}
                            onClick={() => handlePokemonByTypeOnClick("unknown")}
                            />

            <Input  type="text"
                    placeholder="Qual o seu Pokemon preferido?"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}/>

            <SelectContainer id="PokemonType"
                    name="PokemonType"
                    value={selectedPokemonType}
                    onChange={(e) => setSelectedPokemonType(e.target.value)}>
                        <option value="unknown">Unknown</option>
                        {typesPokemons.map((typePokemon, index) => (
                            <option key={index} value={typePokemon}>{formatedName(typePokemon)}</option>
                        ))}
            </SelectContainer>
        </HeaderContainer>
    )
}

export default Header;