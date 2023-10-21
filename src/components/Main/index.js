import { MainContainer } from "./styled"

import CardPokemons from "../cardPokemon";

const Main = ({pokemons, fetchPokemonData}) => {
    return(
        <MainContainer>
            {pokemons.map((pokemon) => (
                <CardPokemons pokemon={pokemon}
                            fetchPokemonData={fetchPokemonData}/>
            ))}
        </MainContainer>
    )
}

export default Main;