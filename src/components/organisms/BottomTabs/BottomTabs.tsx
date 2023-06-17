import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '@/components/templates/Dashboard';
import { Client } from '@/components/templates/Client';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme?.text.primary,
                tabBarStyle: { backgroundColor: theme?.bg.contrast },
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Client" component={Client} />
        </Tab.Navigator>
    );
};
