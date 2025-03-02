export type Media = {
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
    characters: {
        edges: [{
            id: number
            name: string
            role: string
            node: {
                id: number
                image: {
                    medium: string
                }
                name: {
                    full: string
                }
            }
            voiceActors: [{
                id: number
                name: {
                    full: string
                }
                image: {
                    medium: string
                }
            }]
        }]
    }
    episodes: number
    season: string
    seasonYear: number
    startDate: {
        day: number
        month: number
        year: number
    }
}

export type Query = {
    Page: {
        pageInfo: {
            currentPage: number
            hasNextPage: boolean
            perPage: number
        },
        media: [Media]
    }
}

export enum MediaSort {
    'CHAPTER',
    'CHAPTERS_DESC',
    'DURATION',
    'DURATION_DESC',
    'END_DATE',
    'END_DATE_DESC',
    'EPISODES',
    'EPISODES_DESC',
    'FAVOURITES',
    'FAVOURITES_DESC',
    'FORMAT',
    'FORMAT_DESC',
    'ID',
    'ID_DESC',
    'POPULARITY',
    'POPULARITY_DESC',
    'SCORE',
    'SCORE_DESC',
    'SEARCH_MATCH',
    'START_DATE',
    'START_DATE_DESC',
    'STATUS',
    'STATUS_DESC',
    'TITLE_ENGLISH',
    'TITLE_ENGLISH_DESC',
    'TITLE_NATIVE',
    'TITLE_NATIVE_DESC',
    'TITLE_ROMAJI',
    'TITLE_ROMAJI_DESC',
    'TRENDING',
    'TRENDING_DESC',
    'TYPE',
    'TYPE_DESC',
    'UPDATED_AT',
    'UPDATED_AT_DESC',
    'VOLUMES',
    'VOLUMES_DESC'
}