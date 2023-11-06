import { MainContainer, CardPokemonsContainer, H3 } from "./styled"

import CardPokemons from "../cardPokemon";

const Main = ({pokemons, fetchPokemonData, searchPokemon, handleMorePokemon}) => {
    
    return(
        <MainContainer>
            <CardPokemonsContainer>
                {pokemons.map((pokemon, index) => (
                    <CardPokemons   key={index}
                                    pokemon={pokemon}
                                    fetchPokemonData={fetchPokemonData}
                                    searchPokemon={searchPokemon}/>))}
            </CardPokemonsContainer>


            <H3 onClick={handleMorePokemon}>Ver Mais</H3>

        </MainContainer>
    )
}

export default Main;