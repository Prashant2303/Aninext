import { Card } from "@/components/Card";
import { Query } from "@/types";
import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react"

const SearchAnime = gql`
query Anime($query: String!) {
  Page(page: 1) {
    media(search: $query) {
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
}
`

export function Search() {
    const [query, setQuery] = useState('');
    const [searchMedia, { data }] = useLazyQuery<Query>(SearchAnime);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            searchMedia({ variables: { query } })
        }
    }

    console.log(data);

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