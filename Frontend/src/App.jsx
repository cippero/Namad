import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Routes from "./Routes";

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
const Wrapper = styled.div`
    color: palevioletred;
    min-height: 100%;
    display: relative;
`;

const Navbar = styled.div`
    background-color: #add;
    height: 7vh;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-size: 1.25em;
    text-decoration: none;
    color: black;
    margin: 0 10px;

    &:hover {
        color: gray;
    }
`;

const LogoLink = styled(Link)`
    font-size: 2em;
    text-decoration: none;
    color: white;
    margin-left: 20px;
    flex: 1;
`;

const Footer = styled.div`
    font-size: 1em;
    color: #add;
    background-color: #38403f;
    height: 10vh;
    width: 100%;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <Navbar>
                    <LogoLink to="/">Namad</LogoLink>
                    <StyledLink to="/testing">Link1</StyledLink>
                    <StyledLink to="/b">Link2</StyledLink>
                    <StyledLink to="/c">Link3</StyledLink>
                </Navbar>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
                <Footer>
                    Footer
                </Footer>
            </Wrapper>
        );
    }
}