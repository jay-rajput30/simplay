export const LoginMutation = `
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        expiry
      }
} 
`;
