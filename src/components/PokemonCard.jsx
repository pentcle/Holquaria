import Link from "next/link";
import {capitaliseFirstLetter} from "@/utils/capitalise";

const PokemonCard = ({poke}) => {
    return (
        <div className="w-11/12 m-auto">
            <Link href={`/pokemon/${poke.id}`}>
                <div className="p-4 w-full flex flex-row items-center justify-between hover:bg-red-400">
                    <p>{poke.id}</p>
                    <h3 className="text-3xl">{capitaliseFirstLetter(poke.name)}</h3>
                    {poke.sprites.front_default ? (
                        <img
                            className=""
                            src={poke.sprites.front_default}
                            alt={`image of ${poke.name}`}
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default PokemonCard;
