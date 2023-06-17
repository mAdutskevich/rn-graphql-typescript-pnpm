import React from 'react';
import { useFonts } from 'expo-font';
import Roboto400 from '@/fonts/Roboto400.otf';
import Roboto700 from '@/fonts/Roboto700.otf';
// import Lora400 from '@/fonts/Lora400.otf';
// import Lora700 from '@/fonts/Lora700.otf';

export const FontsProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': Roboto400,
        'Roboto-Bold': Roboto700,
        // 'Lora-Regular': Lora400,
        // 'Lora-Bold': Lora700,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <>{props.children}</>;
};
