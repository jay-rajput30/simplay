import { gql } from "@apollo/client";

export const getAllVidoesQuery = gql`
  query {
    allVideos: getAllVideos {
      id
      title
      views
      likes
      link
      category
      thumbnail {
        image
        description
      }
      thumbnailImage
    }
  }
`;

export const updateLikeCountMutation = gql`
  mutation updateUserLikedVideos($videoId: ID!) {
    updateUserLikedVideos(videoId: $videoId) {
      id
      title
      views
      likes
      link
      category
      thumbnail {
        image
        description
      }
      thumbnailImage
    }
  }
`;
