import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import { injectGlobal, ThemeProvider } from 'styled-components';
import config from "./config";
import App from './App';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [{
            name: "namad",
            endpoint: config.apiGateway.URL,
            region: config.apiGateway.REGION
        }, ]
    }
});

const theme = {
    fontSize: '1.75em',
    color: '#666',
    backgroundColor: 'white',
    margin: '75px',
    padding: '25px',
    border: '1px solid black',
    borderRadius: '5px'
}

injectGlobal`
    body, html {
        margin: 0;
        height: 100%;
    }
`

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById('app')
);