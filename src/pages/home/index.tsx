import { useQuery } from "@apollo/client";
import { Query } from "@/types";
import { GetMediaList } from "@/service";
import { SearchBox } from "@/components/searchbox";
import { List } from "@/components/list";

export function Home() {
  const { data: trendingData, loading: trendingLoading } = useQuery<Query>(GetMediaList, {
    variables: {
      query: undefined,
      sort: 'TRENDING_DESC',
      type: 'ANIME',
      perPage: 20
    }
  });

  const { data: topRatedData, loading: topRatedLoading } = useQuery<Query>(GetMediaList, {
    variables: {
      query: undefined,
      sort: 'SCORE_DESC',
      type: 'ANIME',
      perPage: 20
    }
  });

  return <div>
    <SearchBox />
    <List title="Trending Anime" loading={trendingLoading} media={trendingData?.Page.media} />
    <div className="my-8"></div>
    <List title="Top Rated Anime" loading={topRatedLoading} media={topRatedData?.Page.media} />
  </div >
}