import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.div`
    font-size: 1em;
    text-align: center;
    color: palevioletred;
    background-color: #dda;
`;

export default class Footer extends Component {
    render() {
        return (
            <Test>
                Footer
            </Test> 
        );
    }
}