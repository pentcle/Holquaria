import { useRouter } from 'next/router'

import Head from 'next/head'

export default function SinglePokemon({ pokemon }) {
    const router = useRouter()
    const { id } = router.query
    console.log(pokemon)

    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (<>
    <Head>
        <title>{pokemon.name} {pokemon.id}</title>
    </Head>
        <div>
            <h2 className='text-3xl'>{capitaliseFirstLetter(id)}</h2>
            <img src={pokemon.sprites.front_default} alt={`image of ${pokemon.name}`} />
        </div>
   </> )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await res.json();

    return {
        props: { pokemon: data },
    }
}

export async function getStaticPaths() {

    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json();
    console.log(data)
    const paths = data.results.map(pokemon => {
        return { params: { id: pokemon.name } }
    })

    return {
        paths,
        fallback: false
    }
}