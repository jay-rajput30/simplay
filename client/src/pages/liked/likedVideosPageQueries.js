import { gql } from "@apollo/client";

export const getLikedVideosQuery = gql`
    query{
        getUserLikedVideos{
            uid
            likedVideos{
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
    }
`;
