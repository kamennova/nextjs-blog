import Link from "next/dist/client/link";
import React from "react";
import styled from "styled-components";

const BtnStyles = `
    background: black;
    border-radius: 3px;
    padding: 10px 35px 10px;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
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
    style?: string;
};

export const Button = (props: ButtonProps) => (
    <Btn onClick={props.onclick}>{props.children}</Btn>
);

export const LinkButton = (props: { href: string; children: string }) => (
    <Link href={props.href} passHref>
        <StyledLink>{props.children}</StyledLink>
    </Link>
);

const BtnsWrap = styled.div`
    text-align: center;
`;

type MultiProps = {
    isFirst: boolean;
    isLast: boolean;
    bgColor?: string;
    color?: string;
};

const MultiButton = styled.button`
    border: 2px solid black;
    border-bottom-left-radius: ${(props: MultiProps) =>
        props.isFirst ? "3px" : "0"};
    border-top-left-radius: ${(props: MultiProps) =>
        props.isFirst ? "3px" : "0"};
    border-bottom-right-radius: ${(props: MultiProps) =>
        props.isLast ? "3px" : "0"};
    border-top-right-radius: ${(props: MultiProps) =>
        props.isLast ? "3px" : "0"};
    background: ${(props: MultiProps) =>
        props.bgColor ? props.bgColor : "lightgrey"};
    color: ${(props: MultiProps) => (props.color ? props.color : "black")};
    cursor: pointer;
    display: inline-block;
    padding: 10px 0 10px;
    margin-right: -2px;
    text-align: center;
    width: 150px;
    font-weight: bold;
`;

type ItemProps = {
    label: string;
    onClick?: () => void;
    color?: string;
    bgColor?: string;
};

export const MultipleButtons = (props: { items: ItemProps[] }) => (
    <BtnsWrap>
        {props.items.map((item, i) => (
            <MultiButton
                isLast={i === props.items.length - 1}
                isFirst={i === 0}
                color={item.color}
                bgColor={item.bgColor}
                onClick={item.onClick}
            >
                {item.label}
            </MultiButton>
        ))}
    </BtnsWrap>
);
