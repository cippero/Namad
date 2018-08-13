import React, { Component } from "react";
import styled from 'styled-components';
import { Auth } from "aws-amplify";
// import LoaderButton from "../components/LoaderButton";

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

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isLoading: false,
            email: "",
            password: "",
            name: "",
            family_name: "",
            gender: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null,
            buttonText: "Signup"
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.name.length > 0 &&
            this.state.family_name.length > 0 &&
            this.state.gender.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ buttonText: "Signing in..." });
        try {
            const newUser = await Auth.signUp({
                username: this.state.email,
                password: this.state.password,
                attributes: {
                    name: this.state.name,
                    family_name: this.state.family_name,
                    gender: this.state.gender
                }
            });
            this.setState({ newUser: newUser, buttonText: "Verify" });
        } catch (e) {
            alert(e.message);
            console.log(e.message);
            this.setState({ buttonText: "Signup" });
        }  
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();
        this.setState({ buttonText: "Verifying..." });
        try {
            await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            setTimeout(() => { this.props.history.push("/"); }, 500);
        } catch (e) {
            alert(e.message);
            console.log(e.message);
            this.setState({ buttonText: "Verify" });
        }
    }

    renderConfirmationForm() {
        return (
            <form onSubmit={this.handleConfirmationSubmit}>
                <input  id="confirmationCode"
                        type="tel" 
                        placeholder="enter confirmation code"  
                        defaultValue={this.state.confirmationCode}
                        onChange={this.handleChange}
                        autoFocus />

                <div><p>Please check your email for the code.</p></div>

                <input  type="submit" 
                        value={this.state.buttonText}
                        disabled={!this.validateConfirmationForm() || this.state.buttonText !== "Verify"} />
            </form>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input  id="email"
                        type="email" 
                        placeholder="enter email"  
                        defaultValue="gil@weinstock.com" 
                        onChange={this.handleChange}
                        autoFocus />

                <input  id="name"
                        type="text" 
                        placeholder="enter first name"  
                        defaultValue={this.state.name}
                        onChange={this.handleChange}
                        autoFocus />

                <input  id="family_name"
                        type="text" 
                        placeholder="enter last name"  
                        defaultValue={this.state.family_name}
                        onChange={this.handleChange}
                        autoFocus />

                <input  id="gender"
                        type="text" 
                        placeholder="enter gender"  
                        defaultValue={this.state.gender} 
                        onChange={this.handleChange}
                        autoFocus />

                <input  id="password"
                        type="password" 
                        placeholder="enter password" 
                        defaultValue={this.state.password} 
                        onChange={this.handleChange} />

                <input  id="confirmPassword"
                        type="password" 
                        placeholder="enter password" 
                        defaultValue={this.state.confirmPassword} 
                        onChange={this.handleChange} />

                <input  type="submit" 
                        value={this.state.buttonText}
                        disabled={!this.validateForm() || this.state.buttonText !== "Signup"} />
            </form>
        );
    }

    render() {
        return (
            <Content>
                {this.state.newUser === null
                ? this.renderForm()
                : this.renderConfirmationForm()}
            </Content>
        );
    }
}