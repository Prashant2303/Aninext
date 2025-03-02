import { Media } from "@/types";
import { Card } from "../Card";

export function List(props: { title: string, loading: boolean, media: Media[] | undefined }) {
    const { title, loading, media } = props;
    return <div>
        <h2 className="text-2xl my-2">{title}</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {loading ? <div>Loading...</div> : media?.map(media => <Card key={media.id} media={media} />)}
        </div>
    </div>
}