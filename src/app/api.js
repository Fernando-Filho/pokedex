async function getData(pokemon) {

    const url = pokemon === undefined ? `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50` : pokemon;

    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error('Falha ao buscar os dados');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw error;
    }
}
  
async function fetchPokemonData(pokemon) {
    try {
        const pokemonData = await getData(pokemon);
        return(pokemonData);
    } catch (error) {
        return(error);
    }
}
 
export default fetchPokemonData;