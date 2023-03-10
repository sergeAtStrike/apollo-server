import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import fs from "fs";
import { config } from "dotenv";

import { PrismaClientSingletone } from "./lib/db";
import { ServerContextType } from "./types";
import { resolvers } from "./resolvers";

config({});

const PORT = parseInt(process.env.PORT || "4000");

const typeDefs = gql(
  fs.readFileSync("src/schema/schema.graphql", { encoding: "utf8" })
);

const server = new ApolloServer<ServerContextType>({
  typeDefs,
  resolvers,
  introspection: true, //process.env.NODE_ENV !== "production",
});

startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req, res }) => {
    return { req, db: new PrismaClientSingletone() };
  },
})
  .then(({ url }) => {
    console.log(`🚀  Apollo Server at: ${url}`);
  })
  .catch((error) => {
    console.log(`Server failure error: `, error);
  });
