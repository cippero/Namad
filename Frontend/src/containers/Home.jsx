import React, { Component } from 'react';
import styled from 'styled-components';

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

export default class Home extends Component {
    render() {
        return (
            <Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque in tenetur veritatis explicabo fugiat, veniam provident itaque rerum quaerat doloribus magnam et deleniti porro! Suscipit dolorum inventore est quas aut?
            </Content> 
        );
    }
}