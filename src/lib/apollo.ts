import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4onj8870s4o01w7a3t6fltn/master",
  cache: new InMemoryCache(),
});

// import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

// const defaultOptions: DefaultOptions = {
//   watchQuery: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "ignore",
//   },
//   query: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "all",
//   },
// };

// export const client = new ApolloClient({
//   uri: "https://api-sa-east-1.graphcms.com/v2/cl4onj8870s4o01w7a3t6fltn/master",
//   cache: new InMemoryCache(),
//   defaultOptions: defaultOptions,
// });
