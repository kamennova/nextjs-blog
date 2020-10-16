import Link from "next/dist/client/link";
import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";

const BtnStyles = `
    background: ${Colors.primary};
    border-radius: 3px;
    padding: 10px 35px 10px;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    
    & {
        transition: opacity 0.2s linear;
    }

    &:hover {
        opacity: 0.6;
    }
`;

const Btn = styled.button`
    ${BtnStyles}

    a {
        color: white;
        text-decoration: none;
    }
`;

const StyledLink = styled.a`
    ${BtnStyles}
    border: none;
    text-decoration: none;
    font-size: 15px;
    padding: 10px 35px 10px;
    border-radius: 3px;
`;

type ButtonProps = {
    children: JSX.Element | string;
    onclick?: () => void;
};

export const Button = (props: ButtonProps) => (
    <Btn onClick={props.onclick}>{props.children}</Btn>
);

export const LinkButton = (props: { href: string; children: string }) => (
    <Link href={props.href} passHref>
        <StyledLink>{props.children}</StyledLink>
    </Link>
);
