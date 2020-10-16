import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../Colors";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
  transform: rotate(360deg);
  }
`;

const SIZE = 35;

export const SpinnerIcon = styled.span`
    margin: 0 auto;
    display: block;
    width: ${SIZE}px;
    height: ${SIZE}px;
    vertical-align: text-bottom;
    border: 3px solid ${Colors.primary};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;
