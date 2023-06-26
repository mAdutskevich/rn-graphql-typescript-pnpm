import React from 'react';
import { AppState } from 'react-native';

export const useAppStatus = () => {
    const [appStatus, setAppStatus] = React.useState(AppState.currentState);

    React.useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            setAppStatus(nextAppState);
        });

        return () => subscription.remove();
    }, []);

    return appStatus;
};
