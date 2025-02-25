// {
//     Media (id: 1, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
//       id
//       title {
//         romaji
//         english
//         native
//       }
//     }
//   }

import { Search } from "./search";

// {
//     Page (page: 1, perPage: 10) {
//     pageInfo {
//       currentPage
//       hasNextPage
//       perPage
//     }
//     media (search: "Solo") {
//       id
//       title {
//         romaji
//       }
//     }
//   }
// }

const query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      coverImage {
        extraLarge
      }
      title {
        romaji
      }
    }
  }
}
`;

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

const variables = {
  search: "Fate/Zero",
  page: 1,
  perPage: 3
};

const url = 'https://graphql.anilist.co',
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

export default async function Anime() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json();
  console.log(data);

  const resg = await fetch(url, options);
  const datag: Query = await resg.json();
  const list = datag.data.Page.media;
  console.log(list);
  return <div className="border border-cyan-400 h-screen flex justify-center items-center">
    I love anime!!!
    {list.map(anime => <div key={anime.id}><img src={anime.coverImage.extraLarge} alt="" /></div>)}
    <Search />
  </div>
}
