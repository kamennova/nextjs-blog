import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
    border: none;
    padding: 10px 35px 10px;
    background: black;
    color: white;
    cursor: pointer;
    
    a{
        color: white;
        text-decoration: none;
    }
`;

export const Button = (props: {children: JSX.Element | string, onclick?: () => void, style?: string}) => (
    <Btn onClick={props.onclick}>{props.children}</Btn>
);
