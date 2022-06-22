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

//create mutation for increment like count.

//update the ui on like count.
// useMutation logic for increasing like count

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
