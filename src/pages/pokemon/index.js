import PokemonList from "@/components/PokemonList";


export default function PokemonIndex({ pokemonArray }) {
  console.log(pokemonArray);
  return (
    <div>
    <h1 className="text-4xl">Pokemon List</h1>
    <PokemonList pokemonArray={pokemonArray} />
    </div>
  );
}

export async function getStaticProps() {
  const pokemonArray = [];
  for (let i = 1; i < 21; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    pokemonArray.push(data);
  }

  return {
    props: { pokemonArray },
  };
}
