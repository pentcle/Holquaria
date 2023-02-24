import Link from 'next/Link'
import { capitaliseFirstLetter } from '@/utils/capitalise'

export default function PokemonIndex({ pokemon }) {
    console.log(pokemon)
    return (
    <ul>
        {pokemon.results.map(poke => {
            return <li key={poke.name}><Link href={`/pokemon/${poke.name}`}>{capitaliseFirstLetter(poke.name)}</Link></li>
        })}
    </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await res.json();


    return {
        props: { pokemon: data },
    }
}