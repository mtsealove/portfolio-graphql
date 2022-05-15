import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache: cache,
});

export default client;
