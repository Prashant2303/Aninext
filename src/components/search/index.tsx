import { gql, useQuery } from "@apollo/client";
import { useState } from "react"

const SearchAnime = gql`
query Anime($query: String!) {
  Page(page: 1, perPage: 5) {
    media(search: $query) {
      id,
      title {
        english,
        native,
        romaji
      },
      coverImage {
        extraLarge
      }
    }
  }
}
`
type Query = {
    data: {
        Page: {
            pageInfo: {
                currentPage: number
                hasNextPage: boolean
                perPage: number
            },
            media: [{
                id: number
                coverImage: {
                    extraLarge: string
                },
                title: {
                    romanji: string
                }
            }]
        }
    }
}

export function Search() {
    const [query, setQuery] = useState('');
    const { data } = useQuery(SearchAnime, {
        variables: {
            query
        }
    });
    console.log(data);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return <div>
        <input type="text" placeholder="Search" value={query} onChange={handleChange} />
    </div>
}