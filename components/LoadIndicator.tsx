import React from "react";
import styled from "styled-components";
import { SpinnerIcon } from "./icons/Spinner";

const Loading = styled.div`
    padding: 200px 0;
`;

export const LoadIndicator = (): JSX.Element => (
    <Loading>
        <SpinnerIcon />
    </Loading>
);
