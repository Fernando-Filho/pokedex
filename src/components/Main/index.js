import { MainContainer } from "./styled"

import CardPokemons from "../cardPokemon";

const Main = ({pokemons, fetchPokemonData, searchPokemon}) => {
    
    return(
        <MainContainer>
            {pokemons.map((pokemon, index) => (
                <CardPokemons   key={index}
                                pokemon={pokemon}
                                fetchPokemonData={fetchPokemonData}
                                searchPokemon={searchPokemon}/>))}
        </MainContainer>
    )
}

export default Main;