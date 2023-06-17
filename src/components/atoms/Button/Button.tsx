'use client';

import React from 'react';
import { IButtonProps } from './types';
import { StyledButton, StyledText } from './styledComponents';

export const Button: React.FC<IButtonProps> = (props) => {
    return (
        <StyledButton
            // type={props.type || ButtonType.BUTTON}
            $designType={props.$designType}
            $isWithoutBorder={props.$isWithoutBorder}
            $isFullWidth={props.$isFullWidth}
            $size={props.$size}
            $style={props.$style}
            onPress={props.onClick}
        >
            {props.leftIcon}
            <StyledText $designType={props.$designType}>{props.title}</StyledText>
            {props.rightIcon}
        </StyledButton>
    );
};
