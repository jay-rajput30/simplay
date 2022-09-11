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

export const updateLikeCountMutation = `
mutation updateUserLikedVideos($videoId: ID!){
    updateUserLikedVideos(videoId: $videoId){
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
