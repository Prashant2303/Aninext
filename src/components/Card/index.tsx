import { Media } from "@/types";
import { Link } from "react-router";

export function Card({ media }: { media: Media }) {
    return <div className="border" key={media.id}>
        <Link to={`/media/${media.id}`}>
            <img src={media.coverImage.large} />
            {media.title.romaji}
            <p>{media.description}</p>
        </Link>
    </div>
}