import { styled, css } from 'styled-components/native';

export const StyledBackground = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.bg.contrast};
    `}
`;
