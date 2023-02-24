import PokemonCard from "@/components/PokemonCard";


export default function PokemonIndex({ pokemonArray }) {
  console.log(pokemonArray);
  return (
    <ul>
      {pokemonArray.map((poke) => (
        <li className="hover:bg-red-400" key={poke.id}><PokemonCard poke={poke} /></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const pokemonArray = [];
  for (let i = 0; i < 20; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const data = await res.json();
    pokemonArray.push(data);
  }

  return {
    props: { pokemonArray },
  };
}
