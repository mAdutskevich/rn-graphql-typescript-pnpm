import styled, { css } from 'styled-components/native';
import { getFontStyle } from '@/utils/getfontStyle';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { ElementSize } from '@/enums/ElementSize';
import { variables } from '@/themes/variables';
import { IButtonProps } from './types';

export const StyledButton = styled.TouchableOpacity<
    Pick<IButtonProps, '$designType' | '$size' | '$isWithoutBorder' | '$isFullWidth' | '$style'>
>`
    ${({ $designType, theme }) => {
        switch ($designType) {
            case ButtonDesignType.SECONDARY:
                return css`
                    background-color: ${theme.button.secondary.bg};
                    border: 1px solid ${theme.button.secondary.border};
                `;
            default:
                return css`
                    background-color: ${theme.button.primary.bg};
                    border: 1px solid ${theme.button.primary.border};
                `;
        }
    }}
    ${({ $size }) => {
        switch ($size) {
            case ElementSize.LARGE:
                return css`
                    padding: ${variables.spacing.small};
                `;
            case ElementSize.SMALL:
                return css`
                    padding: ${variables.spacing.tiny};
                `;
            default:
                return css`
                    padding: ${variables.spacing.mini};
                `;
        }
    }}
    ${({ $isWithoutBorder }) =>
        $isWithoutBorder &&
        css`
            border: none;
        `}

    ${({ $isFullWidth }) =>
        $isFullWidth &&
        css`
            width: 100%;
        `}

    ${({ $style }) =>
        $style &&
        css`
            ${$style}
        `}

    border-radius: ${variables.border.radiusSmall};
`;

export const StyledText = styled.Text<Pick<IButtonProps, '$designType'>>`
    ${({ $designType, theme }) => {
        switch ($designType) {
            case ButtonDesignType.SECONDARY:
                return css`
                    ${getFontStyle('Roboto', 400)}
                    color: ${theme.button.secondary.color};
                `;
            default:
                return css`
                    ${getFontStyle('Roboto', 400)}
                    color: ${theme.button.primary.color};
                `;
        }
    }}
`;
