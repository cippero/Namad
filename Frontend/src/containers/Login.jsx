import React, { Component } from "react";
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
// import LoaderButton from '../components/LoaderButton';

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
            isLoading: false,
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (e) => {
        this.setState({[e.target.type]: e.target.value});
        this.validateForm();
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            // console.log("Logged in");
            this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            console.log(e.message);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <Content>
                <form onSubmit={this.handleSubmit}>
                    <input  type="email" 
                            placeholder="enter email"  
                            defaultValue="gil@weinstock.com" 
                            onChange={this.handleChange}
                            autoFocus />

                    <input  type="password" 
                            placeholder="enter password" 
                            defaultValue={this.state.password} 
                            onChange={this.handleChange} />

                    <input  type="submit" 
                            value={!this.state.isLoading ? "Login" : "Logging in…"} 
                            disabled={!this.validateForm() || this.state.isLoading} />
                    {/* <LoaderButton
                        block
                        disabled={!this.validateForm() || isLoading}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                    /> */}
                </form>
            </Content>
        );
    }
}