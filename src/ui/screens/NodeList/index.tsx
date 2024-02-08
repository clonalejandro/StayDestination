import { ActivityIndicator } from 'react-native';
import { GridList, Text } from 'react-native-ui-lib';
import { useAsync } from '../../hooks';
import { establishmentNodeService } from '../../../infrastructure/injection';
import { NodeItem } from './components';
import { ColorsSchema } from '../../constants/colors';
import { Container } from '../../components';
import { nodeListStyles } from './style';

export const NodeListScreen = () => {
  const { data, loading } = useAsync(() => establishmentNodeService.getAllNodes(), []);

  return (
    <Container>
      <Text text20BL>Node List</Text>
      {!Boolean(loading) && data ? (
        <GridList
          numColumns={3}
          keepItemSize={true}
          style={nodeListStyles.container}
          data={data}
          renderItem={({ item }) => <NodeItem node={item} />}
        />
      ) : (
        <ActivityIndicator style={nodeListStyles.container} size='large' color={ColorsSchema.INDIGO} />
      )}
    </Container>
  );
};
