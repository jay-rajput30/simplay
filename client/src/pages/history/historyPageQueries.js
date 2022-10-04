import { gql } from "@apollo/client";


export const getUserHistory = gql`
query{
    historyVideos:getUserHistory{
      uid
      history{
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
