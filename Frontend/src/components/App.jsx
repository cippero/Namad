import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import styled, { injectGlobal } from 'styled-components';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

injectGlobal`
    body {
        margin: 0;
    }
`

const Wrapper = styled.div`
    text-align: center;
    color: palevioletred;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <Navbar />
                <Content />
                <Footer />
            </Wrapper>
        );
    }
}