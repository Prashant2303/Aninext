import { List } from "@/components/list";
import { SearchBox } from "@/components/searchbox";
import { GetMediaList } from "@/service";
import { Query } from "@/types";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

export function Search() {
  const { query } = useParams();
  const { data, loading } = useQuery<Query>(GetMediaList, {
    variables: { query }
  });

  return <div>
    <SearchBox />
    <List title="Search results" loading={loading} media={data?.Page.media} />
  </div>
}