import { useRouter } from 'next/router'
import { capitaliseFirstLetter } from '@/utils/capitalise'
import Link from 'next/link'

import Head from 'next/head'

export default function SinglePokemon({ pokemon }) {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    console.log(pokemon)



    return (<>
    <Head>
        <title>{pokemon.name} {pokemon.id}</title>
    </Head>
        <div>
            <h2 className='text-3xl'>{capitaliseFirstLetter(pokemon.name)}</h2>
            {pokemon.sprites.front_default 
            ? <img src={pokemon.sprites.front_default} alt={`image of ${pokemon.name}`} />
            : <p>No image available</p>}
            <Link href={`/pokemon/${parseInt(id) - 1}`}>Previous</Link>
            <Link href={`/pokemon/${parseInt(id) + 1}`}>Next</Link>
        </div>
   </> )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await res.json();

    return {
        props: { pokemon: data },
    }
}

// export async function getStaticProps({ params }) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//     const data = await res.json();

//     return {
//         props: { pokemon: data },
//     }
// }

// export async function getStaticPaths() {

//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//     const data = await res.json();
//     console.log(data)
//     const paths = data.results.map(pokemon => {
//         return { params: { id: pokemon.name } }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }