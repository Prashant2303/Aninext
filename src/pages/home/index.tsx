import { useQuery } from "@apollo/client";
import { Query } from "@/types";
import { GetMediaList } from "@/service";
import { SearchBox } from "@/components/searchbox";
import { List } from "@/components/list";

export function Home() {
  const { data, loading } = useQuery<Query>(GetMediaList, {
    variables: {
      query: undefined,
      sort: 'TRENDING_DESC',
      type: 'ANIME'
    }
  });

  return <div>
    <SearchBox />
    <List title="Trending Anime" loading={loading} media={data?.Page.media} />
  </div >
}