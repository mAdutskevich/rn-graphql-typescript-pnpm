import { Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { Button } from '@/components/atoms/Button';
import { StyledContainer } from './StyledComponents';
import React from 'react';

export const NaviGeo: React.FC = () => {
    const handleStartBgTracking = async () => {
        Geolocation.watchPosition(
            (location) => {
                console.warn('location', location);
            },
            (error) => {
                console.warn('error', error);
            },
            {
                // accuracy: {
                //     android: 'high',
                //     ios: 'best',
                // },
                enableHighAccuracy: true,
                interval: 2000,
                fastestInterval: 1000,
                showLocationDialog: true,
                forceRequestLocation: true,
            },
        );
    };

    const handleStopBgTracking = () => {
        Geolocation.stopObserving();
    };

    return (
        <StyledContainer style={{ flex: 1, alignItems: 'center' }}>
            <Text>NaviGeo</Text>
            <Button
                title="Start background tracking"
                onClick={handleStartBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Button
                title="Stop background tracking"
                onClick={handleStopBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            />
        </StyledContainer>
    );
};
