import { GetMedia } from "@/service";
import { Media } from "@/types";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router"

type TMedia = {
    Media: Media
}

export function MediaPage() {
    const { id } = useParams();
    const { data, loading } = useQuery<TMedia>(GetMedia, { variables: { id } });

    return <div>
        {loading ? <div>Loading...</div>
            : <div>
                <h1 className="text-2xl">{data?.Media.title.romaji}</h1>
                <img src={data?.Media.coverImage.extraLarge} className="my-2" alt="" />
                <p dangerouslySetInnerHTML={{ __html: data?.Media.description || '' }}></p>
                <br />
                <div>Episodes: {data?.Media.episodes}</div>
                <div>Season: {data?.Media.season} {data?.Media.seasonYear}</div>
                <div>Start Date: {data?.Media.startDate.day}-{data?.Media.startDate.month}-{data?.Media.startDate.year}
                </div>
                <br />
                <h2 className="text-2xl">
                    Characters
                </h2>
                <ul>
                    {data?.Media.characters.edges.map(character => {
                        return <li key={character.id} className="flex justify-between my-1.5">
                            <div className="max-w-[100px]">
                                <img src={character.node.image.medium} alt="" />
                                <span>
                                    {character.node.name.full}
                                </span>
                            </div>
                            {character.voiceActors.length > 0 &&
                                <div className="max-w-[100px]">
                                    <img src={character.voiceActors[0].image.medium} />
                                    <span>{character.voiceActors[0].name.full}</span>
                                </div>
                            }
                        </li>
                    })}
                </ul>
            </div>}
    </div>
}