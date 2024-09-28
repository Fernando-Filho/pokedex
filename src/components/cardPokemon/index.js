import { CardContainer, ImageCard, TipoPokemmonContainer, TipoPokemmon } from "./styled";

import { useEffect, useState } from "react";

const CardPokemons = ({pokemon, fetchPokemonData, searchPokemon}) => {

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

    function formatedName(name) {
        return (
            name[0].toUpperCase() + name.substring(1)
        )
    }

    console.log(imgPokemon)

    return(
        <CardContainer $boxshadowtypecolor={"var(--"+tiposPokemon[0].type.name+")"}>
            <ImageCard src={imgPokemon} alt={`Imagem do ${dataPokemon.name}`}/>
            <h3>{`#${dataPokemon.id} `}{namePokemon}</h3>
            <TipoPokemmonContainer>
                {tiposPokemon.map((tipo, index) => (
                    <TipoPokemmon   key={index} 
                                    $backgroundtypecolor={"var(--"+tipo.type.name+")"}>
                                        {formatedName(tipo.type.name)}
                    </TipoPokemmon>
                ))}
            </TipoPokemmonContainer>
        </CardContainer>
    )
}

export default CardPokemons;