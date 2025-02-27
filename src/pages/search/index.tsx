import { Card } from "@/components/Card";
import { GetMediaList } from "@/service";
import { Query } from "@/types";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react"

export function Search() {
  const [query, setQuery] = useState('');
  const [searchMedia, { data }] = useLazyQuery<Query>(GetMediaList);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      searchMedia({ variables: { query } })
    }
  }

  return <div>
    <input
      className="border rounded h-10"
      type="text"
      placeholder="Search"
      value={query}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    {data?.Page.media.map(media => <Card key={media.id} media={media}
    />)}
  </div>
}