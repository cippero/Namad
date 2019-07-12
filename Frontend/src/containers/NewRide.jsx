import React, { Component } from "react";
import { API } from "aws-amplify";
import styled from 'styled-components';
import config from "../config";
import { s3Upload } from "../libs/awsLib";

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

export default class NewRide extends Component {
    constructor(props) {
        super(props);
        this.file = null;
        this.state = {
            content: "",
            buttonText: "Create"
        };
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
            alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
            return;
        }
        this.setState({ buttonText: "Creating…" });
        
        try {
            const attachment = this.file
                ? await s3Upload(this.file)
                : null;
        
            await this.createRide({
                attachment,
                content: this.state.content
            });
        } catch (e) {
            alert(e);
            console.log(e);
            this.setState({ buttonText: "Create" });
        }
    }
        
    createRide(ride) {
        return API.post("namad", "rides", {
            body: ride
        });
    }

    render() {
        return (
            <Content>
                <form onSubmit={this.handleSubmit}>
                    <input  type="textarea" 
                            onChange={this.handleChange} 
                            value={this.state.content} 
                            id="content" />

                    <label htmlFor="file">Attachment</label>
                    <input  type="file"
                            id="file"
                            onChange={this.handleFileChange} />

                    <input  type="submit" 
                        value={this.state.buttonText}
                        disabled={!this.validateForm() || this.state.buttonText !== "Create"} />
                </form>
            </Content>
        );
    }
}