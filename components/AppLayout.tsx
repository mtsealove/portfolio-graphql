import React, {ReactNode} from "react";
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import Header from "./Header";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});

type AppLayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children}:AppLayoutProps) => {
    return(
        <ApolloProvider client={client}>
            <div>
                {children}
            </div>
        </ApolloProvider>
    )
};

export default AppLayout;
