import { useQuery } from "@apollo/client";
import { Search } from "../search";
import { Query } from "@/types";
import { Card } from "@/components/Card";
import { GetMediaList } from "@/service";

export function Home() {
  const { data, loading } = useQuery<Query>(GetMediaList, {
    variables: {
      query: undefined,
      sort: 'TRENDING_DESC',
      type: 'ANIME'
    }
  });

  return <div>
    <Search />
    <h2 className="text-xl">Trending Anime</h2>
    {loading ? <div>Loading...</div> :
      <div className="flex flex-wrap gap-4 justify-center" >
        {data?.Page.media.map(media => <Card key={media.id} media={media} />)}
      </div>}
  </div>
}