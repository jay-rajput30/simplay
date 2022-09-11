import { gql } from "@apollo/client";
export const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      expiry
    }
  }
`;
