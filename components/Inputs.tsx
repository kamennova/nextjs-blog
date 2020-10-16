import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Colors } from "../ts/Colors";

const InputStyle = `
    width: 100%;
    border: 2px solid ${Colors.grey};
    padding: 5px 7px;
    border-radius: 3px;
    font-size: 17px;
    transition: border-color 0.2s linear;
    
    &:hover {
        border-color: ${Colors.primary}
    }
`;

const TextAreaElem = styled.textarea`
    ${InputStyle}
`;

const TextInputElem = styled.input`
    ${InputStyle}
`;

type InputProps<InputType> = {
    val: string;
    setVal: (s: ChangeEvent<InputType>) => void;
    name: string;
};

export const TextArea = (
    props: InputProps<HTMLTextAreaElement> & { rows?: number }
): JSX.Element => (
    <TextAreaElem
        rows={props.rows}
        value={props.val}
        name={props.name}
        onChange={props.setVal}
    />
);

export const TextInput = (props: InputProps<HTMLInputElement>): JSX.Element => (
    <TextInputElem
        type={"text"}
        value={props.val}
        name={props.name}
        onChange={props.setVal}
    />
);

const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin-bottom: 30px;
`;

const Label = styled.label`
    display: inline-block;
    text-transform: capitalize;
    margin-bottom: 5px;
`;

export const FormControl = (props: {
    label: string;
    children: JSX.Element;
}): JSX.Element => (
    <Fieldset>
        <Label>{props.label}</Label>
        {props.children}
    </Fieldset>
);
