// const graphqlYoga = require("graphql-yoga");

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    // schema란? 서버가 받거나 줄 정보에 대한 설명
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running on localhost:4000"));