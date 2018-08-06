import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.h1`
font-size: 3.5em;
text-align: center;
color: palevioletred;
`;

export class App extends Component {
    render() {
        return (
            <Test>
                Hello World
            </Test>
        );
    }
}
export default App;