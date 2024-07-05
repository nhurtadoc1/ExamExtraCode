import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/Query.ts";
import { typeDefs } from "./gql/schema.ts";

try {
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
    },
  });

  const { url } = await startStandaloneServer(server);
  console.info(`🚀 Server ready at ${url}`);
} catch(err) {
  console.log(err);
}