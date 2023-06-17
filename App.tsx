import { View } from 'react-native';
import withTheme from '@/hocs/withTheme';
import { Root } from '@/components/templates/Root';

const App: React.FC = () => {
    return (
        <View>
            <Root />
        </View>
    );
};

export default withTheme(App);
