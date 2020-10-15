import React, { ChangeEvent } from 'react';
import styled from "styled-components";

const InputStyle = `
    width: 100%;
    border: 1px solid black;
    padding: 2px;
`;

const TextAreaElem = styled.textarea`
    ${InputStyle}
`;

const TextInputElem = styled.input`
    ${InputStyle}
`;

type InputProps<InputType> = {
    val: string,
    setVal: (s: ChangeEvent<InputType>) => void,
    name: string,
};

export const TextArea = (props:InputProps<HTMLTextAreaElement>) => (
    <TextAreaElem value={props.val} name={props.name} onChange={props.setVal} />
);

export const TextInput = (props: InputProps<HTMLInputElement>) => (
    <TextInputElem type={'text'} value={props.val} name={props.name} onChange={props.setVal}/>
) ;
