import React from 'react';
import styled from "styled-components";

const BtnStyles = `
    background: black;
    color: white;
    cursor: pointer;
    font-weight: bold;
`;

const Btn = styled.button`
    ${BtnStyles}
    border: none;
    padding: 10px 35px 10px;
    border-radius: 3px;
    
    a{
        color: white;
        text-decoration: none;
    }
`;

type ButtonProps = { children: JSX.Element | string, onclick?: () => void, style?: string };

export const Button = (props: ButtonProps) => (
    <Btn onClick={props.onclick}>{props.children}</Btn>
);

const BtnsWrap = styled.div`
    text-align: center;
`;

type MultiProps = {
    isFirst: boolean,
    isLast: boolean,
    bgColor?: string,
    color?: string,
};

const MultiButton = styled.button`
    border: 2px solid black;
    border-bottom-left-radius: ${(props: MultiProps) => props.isFirst ? '8px' : '0'};
    border-top-left-radius: ${(props: MultiProps) => props.isFirst ? '8px' : '0'};
    border-bottom-right-radius: ${(props: MultiProps) => props.isLast ? '8px' : '0'};
    border-top-right-radius: ${(props: MultiProps) => props.isLast ? '8px' : '0'};
    background: ${(props: MultiProps) => props.bgColor ? props.bgColor : 'lightgrey'};
    color: ${(props: MultiProps) => props.color ? props.color : 'black'};
    cursor: pointer;
    display: inline-block;
    padding: 10px 0 10px;
    margin-right: -2px;
    text-align: center;
    width: 150px;
    font-weight: bold;
`;

type ItemProps = {
    label: string, onClick?: () => void, color?: string, bgColor?: string,
};

export const MultipleButtons = (props: { items: ItemProps[] }) => (
    <BtnsWrap>
        {props.items.map((item, i) =>
            <MultiButton isLast={i === props.items.length - 1} isFirst={i === 0} color={item.color} bgColor={item.bgColor}
                         onClick={item.onClick}>{item.label}</MultiButton>
        )}
    </BtnsWrap>
);
