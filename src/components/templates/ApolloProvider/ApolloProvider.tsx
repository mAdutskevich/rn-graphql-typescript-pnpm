import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Apollo } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from '@env';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<React.PropsWithChildren> = (props) => (
    <Apollo client={client}>{props.children}</Apollo>
);
