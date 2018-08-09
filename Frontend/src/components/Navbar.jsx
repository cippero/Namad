import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Test = styled.div`
    font-size: 3.5em;
    text-align: center;
    color: palevioletred;
    background-color: #add;
`;

export default class Navbar extends Component {
    render() {
        return (
            <Test>
                Navbar
            </Test> 
        );
    }
}