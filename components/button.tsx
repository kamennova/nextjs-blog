import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
    border: 1px solid red;
    padding: 4px;
    color: red;
    cursor: pointer;
`;

export const Button = (props: {children: JSX.Element | string, onclick?: () => void}) => (
    <Btn onClick={props.onclick}>{props.children}</Btn>
);
