import Link from "next/link"
import { capitaliseFirstLetter } from "@/utils/capitalise"

const PokemonCard = ({poke}) => {
    return (
        <div>
            <Link href={`/pokemon/${poke.id}`}>
              <p className="">{poke.id}</p>
              <h3 className="text-3xl">{capitaliseFirstLetter(poke.name)}</h3>
              {poke.sprites.front_default 
                ? <img className="hover:scale-50" src={poke.sprites.front_default} alt={`image of ${poke.name}`} />
                : <p>No image available</p>}
            </Link>
        </div>
    )
}

export default PokemonCard