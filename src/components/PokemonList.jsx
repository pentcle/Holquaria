import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonArray }) => {
  return (
    <ul>
      {pokemonArray.map((poke) => (
          <PokemonCard key={poke.id} poke={poke} />
      ))}
    </ul>
  );
};

export default PokemonList