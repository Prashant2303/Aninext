import { Media } from "@/types";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router"

const GetMediaById = gql`
query getMediaById($id: Int!) {
    Media(id: $id) {
        id,
        title {
            english,
            native,
            romaji
        },
        coverImage {
            extraLarge,
            large,
            medium
        },
        description
    }
}
`
type TMedia = {
    Media: Media
}

export function MediaPage() {
    const { id } = useParams();
    const { data, loading } = useQuery<TMedia>(GetMediaById, { variables: { id } });
    console.log(data?.Media.title.romaji);

    return <div>
        {loading ? <div>Loading...</div>
            : <div>
                <h1 className="text-lg">{data?.Media.title.romaji}</h1>
                <img src={data?.Media.coverImage.extraLarge} alt="" />
                <p>{data?.Media.description}</p>
            </div>}
    </div>
}