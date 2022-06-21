import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4onj8870s4o01w7a3t6fltn/master",
  cache: new InMemoryCache(),
});
