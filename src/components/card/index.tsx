import { Media } from "@/types";
import { Link } from "react-router";

export function Card({ media }: { media: Media }) {
    return <div className="text-center max-w-[200px]" key={media.id}>
        <Link to={`/media/${media.id}`}>
            <img className="rounded" src={media.coverImage.large} alt={media.title.romaji} />
            {media.title.romaji}
        </Link>
    </div>
}