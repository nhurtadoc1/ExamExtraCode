export const typeDefs = `#graphql
    type Character {
        id: Int!
        name: String!
        status: String!
        species: String!
    }

    type Query {
        character(id: String): Character!
    }
`;