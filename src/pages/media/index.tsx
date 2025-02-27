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
                <h1 className="text-lg">{data?.Media.title.romaji}</h1>
                <img src={data?.Media.coverImage.extraLarge} alt="" />
                <p>{data?.Media.description}</p>
            </div>}
    </div>
}