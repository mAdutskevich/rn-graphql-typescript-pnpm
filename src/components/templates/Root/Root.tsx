import React from 'react';
import { View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { BottomTabs } from '@/components/organisms/BottomTabs';

export const Root: React.FC = () => {
    return (
        <View style={{ height: '100%' }}>
            {/* <StatusBar style="auto" /> */}
            <BottomTabs />
        </View>
    );
};
