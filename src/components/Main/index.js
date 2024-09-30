import { MainContainer, CardPokemonsContainer, H3 } from "./styled"

import CardPokemons from "../cardPokemon";

const Main = ({listPokemons, fetchPokemonData, searchPokemon, handleMorePokemon, handlePokemonByTypeOnClick}) => {

    listPokemons = searchPokemon !== "" ? listPokemons.filter((item) => item.name.includes(searchPokemon.toLowerCase())) : listPokemons;
    
    return(
        <MainContainer>
            <CardPokemonsContainer>
                {listPokemons.map((pokemon, index) => (
                    <CardPokemons   key={index}
                                    pokemon={pokemon}
                                    fetchPokemonData={fetchPokemonData}
                                    searchPokemon={searchPokemon}
                                    handlePokemonByTypeOnClick={handlePokemonByTypeOnClick}/>))}
            </CardPokemonsContainer>


            <H3 onClick={handleMorePokemon}>Ver Mais</H3>

        </MainContainer>
    )
}

export default Main;