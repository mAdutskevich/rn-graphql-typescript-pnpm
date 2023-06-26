import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '@/components/templates/Dashboard';
import { Client } from '@/components/templates/Client';
import { Navi } from '@/components/templates/Navi';
import { NaviGeo } from '@/components/templates/NaviGeo';
import { NaviBgGeo } from '@/components/templates/NaviBgGeo';

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
            <Tab.Screen name="Navigation" component={Navi} />
            <Tab.Screen name="NaviGeo" component={NaviGeo} />
            <Tab.Screen name="NaviBgGeo" component={NaviBgGeo} />
        </Tab.Navigator>
    );
};
