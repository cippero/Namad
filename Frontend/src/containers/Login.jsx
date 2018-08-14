import React, { Component } from "react";
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

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
            password: "",
            buttonText: "Login"
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        this.validateForm();
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ buttonText: "Logging in..." });
        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            this.setState({ buttonText: "Success!" });
            setTimeout(() => { this.props.history.push("/"); }, 500);
            
        } catch (e) {
            alert(e.message);
            console.log(e.message);
            this.setState({ buttonText: "Login" });
        }
    }

    render() {
        return (
            <Content>
                <form onSubmit={this.handleSubmit}>
                    <input  id="email"
                            type="email" 
                            placeholder="enter email"  
                            defaultValue="gil@weinstock.com" 
                            onChange={this.handleChange}
                            autoFocus />

                    <input  id="password"
                            type="password" 
                            placeholder="enter password" 
                            defaultValue={this.state.password} 
                            onChange={this.handleChange} />

                    <input  type="submit" 
                            value={this.state.buttonText}
                            disabled={!this.validateForm() || this.state.buttonText !== "Login"} />
                </form>
            </Content>
        );
    }
}