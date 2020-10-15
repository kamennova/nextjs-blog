import { AppProps } from "next/dist/pages/_app";
import * as React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import store from "../store/store";

const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

p{
    line-height: 1.6;
}

* {
    box-sizing: border-box;
}
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
