import { NavigationContainer } from '@react-navigation/native';
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

export default withTheme(App);
