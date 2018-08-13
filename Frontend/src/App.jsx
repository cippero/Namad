import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import styled from 'styled-components';
import Routes from "./Routes";

const Wrapper = styled.div`
    color: palevioletred;
    min-height: 100%;
    display: relative;
`;

const Navbar = styled.div`
    background-color: #add;
    height: 7vh;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-size: 1.25em;
    text-decoration: none;
    color: black;
    margin: 0 10px;

    &:hover {
        color: gray;
    }
`;

const LogoLink = styled(Link)`
    font-size: 2em;
    text-decoration: none;
    color: white;
    margin-left: 20px;
    flex: 1;
`;

const StyledAnchor = styled.a`
    font-size: 1.25em;
    text-decoration: none;
    color: black;
    margin: 0 10px;

    &:hover {
        color: gray;
        cursor: pointer;
    }
`;

// const Footer = styled.div`
//     font-size: 1em;
//     color: #add;
//     background-color: #38403f;
//     height: 10vh;
//     width: 100%;
//     position: relative;
//     bottom: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    async componentDidMount() {
        try {
            if (await Auth.currentSession()) { this.userHasAuthenticated(true); }
        } catch (e) {
            if (e !== 'No current user') { alert(e); }
        }
        this.setState({ isAuthenticating: false });
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    handleLogout = async event => {
        await Auth.signOut();
        this.userHasAuthenticated(false);
        this.props.history.push("/login");
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            !this.state.isAuthenticating &&
            <Wrapper>
                <Navbar>
                    <LogoLink to="/">Namad</LogoLink>
                    
                        {this.state.isAuthenticated
                            ? <StyledAnchor type="button" onClick={this.handleLogout}>Logout</StyledAnchor>
                            : <div>
                                    <StyledLink to="/login">Login</StyledLink>
                                    <StyledLink to="/signup">Signup</StyledLink>
                                    <StyledLink to="/testing">Testing</StyledLink>
                                    <StyledLink to="/c">Link2</StyledLink>
                            </div>
                        }
                    
                </Navbar>
                <Routes childProps={childProps} />
                {/* <Footer>
                    Footer
                </Footer> */}
            </Wrapper>
        );
    }
}

export default withRouter(App);