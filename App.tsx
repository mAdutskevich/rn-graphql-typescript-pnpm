import { NavigationContainer } from '@react-navigation/native';
import { STORYBOOK_ENABLED } from '@env';
import withTheme from '@/hocs/withTheme';
import { ApolloProvider } from '@/components/templates/ApolloProvider';
import { Root } from '@/components/templates/Root';
import Smth from './.ondevice';

const App: React.FC = () => {
    return (
        <ApolloProvider>
            <NavigationContainer>
                <Root />
            </NavigationContainer>
        </ApolloProvider>
    );
};

// export default withTheme(App);

let AppEntryPoint = withTheme(App);

if (STORYBOOK_ENABLED === 'true') {
    // AppEntryPoint = require('./.ondevice').default;
    AppEntryPoint = Smth;
}

export default AppEntryPoint;
