import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Storybook from './.ondevice';
import withTheme from '@/hocs/withTheme';
import { ApolloProvider } from '@/components/templates/ApolloProvider';
import { Root } from '@/components/templates/Root';

const App: React.FC = () => {
    return (
        <ApolloProvider>
            <NavigationContainer>
                <Root />
            </NavigationContainer>
        </ApolloProvider>
    );
};

let AppEntryPoint = withTheme(App);

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
    AppEntryPoint = Storybook;
}

export default AppEntryPoint;
