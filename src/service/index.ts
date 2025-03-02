import { gql } from "@apollo/client";

export const GetMediaList = gql`
query MediaList($query: String, $sort: [MediaSort], $type: MediaType, $perPage: Int) {
  Page(page: 1, perPage:$perPage) {
    media(search: $query, sort: $sort, type: $type, isAdult: false) {
      id,
      title {
        english,
        native,
        romaji
      },
      coverImage {
        large,
        medium
      }
    }
  }
}
`
export const GetMedia = gql`
query getMediaById($id: Int!) {
    Media(id: $id) {
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
        description(asHtml: false)
        characters {
          edges {
            id
            name
            role
            node {
              id
              image {
                medium
              }
              name {
                full
              }
            }
            voiceActors {
              id
              name {
                full
              }
              image {
                medium
              }
            }
          }
        }
        episodes
        season
        seasonYear
        startDate {
          day
          month
          year
        }
    }
}
`