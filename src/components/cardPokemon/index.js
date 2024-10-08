import { CardContainer, ImageCard, TipoPokemmonContainer, TipoPokemmon } from "./styled";

import { useEffect, useState } from "react";

const CardPokemons = ({pokemon, fetchPokemonData, searchPokemon, handlePokemonByTypeOnClick, formatedName}) => {

    const [dataPokemon, setDataPokemon] = useState([])
    const namePokemon = dataPokemon.length == 0 ? "---" : formatedName(dataPokemon.name);
    const imgPokemon = dataPokemon.length == 0 ? "ditto.png" : dataPokemon.sprites.front_default;
    const tiposPokemon = dataPokemon.length == 0 ? [{type:{name: "---"}}] : dataPokemon.types;

    useEffect(() => {
        handleDataPokemon();
    },[searchPokemon]);

    async function handleDataPokemon() {
        const res = await fetchPokemonData(pokemon.url);
        setDataPokemon(() => res);
      }

    return(
        <CardContainer $boxshadowtypecolor={"var(--"+tiposPokemon[0].type.name+")"}>
            <ImageCard src={imgPokemon} alt={`Imagem do ${dataPokemon.name}`}/>
            <h3>{namePokemon}</h3>
            <TipoPokemmonContainer>
                {tiposPokemon.map((tipo, index) => (
                    <TipoPokemmon   key={index}
                                    value={tipo.type.name}
                                    $backgroundtypecolor={"var(--"+tipo.type.name+")"}
                                    onClick={() => handlePokemonByTypeOnClick(tipo.type.name)}>
                                        {formatedName(tipo.type.name)}
                    </TipoPokemmon>
                ))}
            </TipoPokemmonContainer>
        </CardContainer>
    )
}

export default CardPokemons;