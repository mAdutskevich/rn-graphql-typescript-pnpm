import React from 'react';
import { Text } from 'react-native';
// import BackgroundGeolocation, {
//     State,
//     Config,
//     Location,
//     LocationError,
//     Geofence,
//     HttpEvent,
//     MotionActivityEvent,
//     ProviderChangeEvent,
//     MotionChangeEvent,
//     GeofenceEvent,
//     GeofencesChangeEvent,
//     HeartbeatEvent,
//     ConnectivityChangeEvent,
//     DeviceSettings,
//     DeviceSettingsRequest,
//     Notification,
//     DeviceInfo,
//     Authorization,
//     AuthorizationEvent,
//     TransistorAuthorizationToken,
//     Subscription,
// } from 'react-native-background-geolocation';
// import { ButtonDesignType } from '@/enums/ButtonDesignType';
// import { Button } from '@/components/atoms/Button';
import { StyledContainer } from './StyledComponents';

export const NaviBgGeo: React.FC = () => {
    // const handleStartBgTracking = async () => {
    // let location = await BackgroundGeolocation.getCurrentPosition({
    //     timeout: 30, // 30 second timeout to fetch location
    //     persist: true, // Defaults to state.enabled
    //     maximumAge: 5000, // Accept the last-known-location if not older than 5000 ms.
    //     desiredAccuracy: 10, // Try to fetch a location with an accuracy of `10` meters.
    //     samples: 3, // How many location samples to attempt.
    //     extras: {
    //         // Custom meta-data.
    //         route_id: 123,
    //     },
    // });
    // console.log('location', location);
    // };

    // const handleStopBgTracking = () => {};

    // React.useEffect(() => {
    //     console.log('hello');
    //     (async () => {
    //         const permission = await Geolocation.requestAuthorization('always');
    //         console.log('permission', permission);
    //     })();
    // }, []);

    return (
        <StyledContainer style={{ flex: 1, alignItems: 'center' }}>
            <Text>NaviGeo</Text>
            {/* <Button
                title="Start background tracking"
                onClick={handleStartBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Button
                title="Stop background tracking"
                onClick={handleStopBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            /> */}
        </StyledContainer>
    );
};
