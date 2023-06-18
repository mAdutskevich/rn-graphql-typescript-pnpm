// import { ButtonType } from '@/enums/ButtonType';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { ElementSize } from '@/enums/ElementSize';

export interface IButtonProps {
    title: string;
    onClick?: () => void;
    // type?: ButtonType;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    $designType?: ButtonDesignType;
    $isFullWidth?: boolean;
    $isWithoutBorder?: boolean;
    $size?: ElementSize;
    $style?: string;
}
