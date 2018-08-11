import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Routes from "./Routes";

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

// const Footer = styled.div`
//     font-size: 1em;
//     color: #add;
//     background-color: #38403f;
//     height: 10vh;
//     width: 100%;
//     position: relative;
//     bottom: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <Navbar>
                    <LogoLink to="/">Namad</LogoLink>
                    <StyledLink to="/testing">Link1</StyledLink>
                    <StyledLink to="/login">Login</StyledLink>
                    <StyledLink to="/c">Link3</StyledLink>
                </Navbar>
                <Routes />
                {/* <Footer>
                    Footer
                </Footer> */}
            </Wrapper>
        );
    }
}