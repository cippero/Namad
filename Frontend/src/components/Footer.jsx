import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.div`
    font-size: 1em;
    color: palevioletred;
    background-color: #dda;
    height: 10vh;
    width: 100%;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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