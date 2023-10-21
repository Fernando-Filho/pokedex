import { CardContainer, ImageCard, TipoPokemmonContainer, TipoPokemmon } from "./styled";

import { useEffect, useState } from "react";

const CardPokemons = ({pokemon, fetchPokemonData}) => {

    const [dataPokemon, setDataPokemon] = useState([])

    useEffect(() => {
        const res = fetchPokemonData(pokemon.url)
        setDataPokemon(() => res)
    },[]);

    console.log()

    return(
        <CardContainer>
            <ImageCard src="ditto.png"/>
            <h3>{pokemon.name}</h3>
            <TipoPokemmonContainer>
                <TipoPokemmon>{dataPokemon}</TipoPokemmon>
                <TipoPokemmon>Tipo 2</TipoPokemmon>
            </TipoPokemmonContainer>
        </CardContainer>
    )
}

export default CardPokemons;