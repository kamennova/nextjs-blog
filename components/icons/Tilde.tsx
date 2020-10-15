import React from 'react';

export const TildeIcon = (props: {size: number, color?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width={props.size} height={props.size}
         preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path
            d="M2 15s0-6 6-6c4 0 4.5 3.5 7.5 3.5c4 0 4-3.5 4-3.5H22s0 6-6 6c-4 0-5.5-3.5-7.5-3.5c-4 0-4 3.5-4 3.5H2"
            fill="black"/>
    </svg>
);
