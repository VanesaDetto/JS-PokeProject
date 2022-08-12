//1. ALMACENAMIENTO DE LA URL
const URL = "https://pokeapi.co/api/v2/pokemon/";

let ListaPokemon = [];

//2.ETAPA DE SINCRONISIDAD

//A.
window.onload = () => {
  init();
};

///B.
const init = async () => {
  const pokemons = await getPokemons();
  mappedPokemon(pokemons);
};

///C.
const getPokemons = async () => {
  for (index = 1; index < 152; index++) {
    const pokemonApi = await fetch(`${URL}${index}`);

    const convertoJson = await pokemonApi.json();
    ListaPokemon.push(convertoJson);
  }
};

//3. ETAPA DE MAPEO

const mappedPokemon = () => {
  ListaPokemon.map((pokemon) => {
    return printPokemon({
      nombre: pokemon.name,
      imagen: pokemon.sprites.other.dream_world.front_default,
      numero: pokemon.id,
      altura: pokemon.height,
      peso: pokemon.weight,
    });
  });
};

//4.ARMO HTML

const printPokemon = (pokemon) => {
  let pokemonContainer = document.querySelector(`#pokemonContainer`);
  pokemonContainer.innerHTML += `
    <figure class="figure_container">
    <div class="numero">
      <h2>#${pokemon.numero}<h2>
      </div>
    <img class= "zoom" src="${pokemon.imagen}" alt="${pokemon.nombre}" />
    <div class="nombre">
      <h3>${pokemon.nombre}</h3>
    </div>
    <p class="parrafos">HEIGHT:${pokemon.altura}<p>
    <p class="parrafos">WEIGHT: ${pokemon.peso}<p>
    </figure>
    `;
};
