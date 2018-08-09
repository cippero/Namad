import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Test = styled.div`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
    background-color: #dad;
`;

export default class Content extends Component {
    render() {
        return (
            <Test>
                Content
            </Test> 
        );
    }
}