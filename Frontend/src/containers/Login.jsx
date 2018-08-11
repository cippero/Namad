import React, { Component } from "react";
import styled from 'styled-components';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Content = styled.div`
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    margin: ${props => props.theme.margin};
    padding: ${props => props.theme.padding};
    border: ${props => props.theme.border};
    border-radius: ${props => props.theme.borderRadius};

    @media (max-width: 700px) {
        font-size: 1.5em;
        padding: 100px 50px 50px 50px;
    }
`;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (e) => {
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        return (
            <Content>
                <form onSubmit={this.handleSubmit}>
                    <input  type="email" 
                            placeholder="enter email"  
                            defaultValue={this.state.email} 
                            onChange={this.handleChange}
                            autoFocus />

                    <input  type="password" 
                            placeholder="enter password" 
                            defaultValue={this.state.password} 
                            onChange={this.handleChange} />

                    <input  type="submit" 
                            value="Login" 
                            disabled={!this.validateForm()} />
                </form>
            </Content>
        );
    }
}