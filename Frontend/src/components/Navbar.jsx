import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Bar = styled.div`
    font-size: 2em;
    color: palevioletred;
    background-color: #add;
    height: 7vh;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0 10px;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-left: 20px;
    flex: 1;
`;

export default class Navbar extends Component {
    render() {
        return (
            <Bar>
                <LogoLink to="/">Namad</LogoLink>
                <StyledLink to="/testing">Link1</StyledLink>
                <StyledLink to="/b">Link2</StyledLink>
                <StyledLink to="/c">Link3</StyledLink>
            </Bar>
        );
    }
}