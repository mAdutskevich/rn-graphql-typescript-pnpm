import { ENVIRONMENT } from '@env'; // when we include @env we can use both ENVIRONMENT or process.env.ENVIRONMENT
import { MOBILE } from '@/constants/constants';

export const getFontStyle = (fontName: string, fontWeight: 400 | 700) => {
    if (ENVIRONMENT === MOBILE) {
        return `font-family: ${fontName}-${fontWeight === 700 ? 'Bold' : 'Regular'};`;
    }

    return `font-family: ${fontName}; font-weight: ${fontWeight};`;
};
