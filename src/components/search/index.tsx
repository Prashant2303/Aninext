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

type Media = {
    id: number
    coverImage: {
        extraLarge: string
        large: string
        medium: string
    },
    title: {
        romaji: string
        english: string
        native: string
    },
    description: string
}

type Query = {
    Page: {
        pageInfo: {
            currentPage: number
            hasNextPage: boolean
            perPage: number
        },
        media: [Media]
    }
}

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
        <input type="text" placeholder="Search" value={query} onChange={handleChange} onKeyDown={handleKeyDown} />
        {data?.Page.media.map(media => <div className="border" key={media.id}>
            <img src={media.coverImage.large} />
            {media.title.romaji}
            <p>{media.description}</p>
        </div>)}
    </div>
}