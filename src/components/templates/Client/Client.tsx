import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import rockets from '@/graphql/queries/rockets';
import { StyledContainer } from './StyledComponents';

export const Client: React.FC = () => {
    const { loading, error, data } = useQuery(rockets, {
        onCompleted: (response) => {
            console.warn(response);
        },
    });

    return (
        <StyledContainer style={{ flex: 1, alignItems: 'center' }}>
            <Text>Client</Text>
            <Text>Client Graph QL request:</Text>
            {loading && <Text>Loading..</Text>}
            {error && <Text>{JSON.stringify(error)}</Text>}
            {data && <Text>{JSON.stringify(data)}</Text>}
        </StyledContainer>
    );
};
