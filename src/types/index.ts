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