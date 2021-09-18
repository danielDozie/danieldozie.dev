import {ApolloClient, InMemoryCache } from "@apollo/client";
  
const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    headers:{
        Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    cache: new InMemoryCache()
  });

export default client;