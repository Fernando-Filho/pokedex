import { CardContainer, ImageCard, TipoPokemmonContainer, TipoPokemmon } from "./styled";

import { useEffect, useState } from "react";

const CardPokemons = ({pokemon, fetchPokemonData}) => {

    const [dataPokemon, setDataPokemon] = useState([])

    const tiposPokemon = dataPokemon.length == 0 ? [{type:{name: "---"}}] : dataPokemon.types;

    useEffect(() => {
        handleDataPokemon();
    },[]);

    async function handleDataPokemon() {
        const res = await fetchPokemonData(pokemon.url);
        setDataPokemon(() => res);
      }

    return(
        <CardContainer>
            <ImageCard src={dataPokemon.sprites.front_default} alt={`Imagem do ${dataPokemon.name}`}/>
            <h3>{dataPokemon.name}</h3>
            <TipoPokemmonContainer>
                {tiposPokemon.map((tipo) => (
                    <TipoPokemmon>{tipo.type.name}</TipoPokemmon>
                ))}
            </TipoPokemmonContainer>
        </CardContainer>
    )
}

export default CardPokemons;