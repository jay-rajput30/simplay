export const getAllVidoesQuery = `
query {
    getAllVideos {
        id
        title
        views
        likes
        link
        category
        thumbnail{
            image
            description
        }
        thumbnailImage
    }
}

`;
