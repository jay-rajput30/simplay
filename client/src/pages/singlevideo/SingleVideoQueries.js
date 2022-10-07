import { gql } from "@apollo/client";

export const singleVideoQuery = gql`
    query singleVideoQuery($id:ID!){
        video:getVideo(id:$id){
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
