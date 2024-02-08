import { useRoute } from '@react-navigation/native';
import { Button, Text } from 'react-native-ui-lib';
import EstablishmentNode from '../../../domain/models/EstablishmentNode';
import { Container } from '../../components';
import { useRedirect } from '../../hooks';
import { Routes } from '../../constants/routes';
import { config } from '../../../../config';
import { nodeInfoStyles } from './style';

type NodeInfoParams = {
  node: EstablishmentNode;
};

export const NodeInfoScreen = () => {
  const { params } = useRoute() as { params: NodeInfoParams };
  const redirect = useRedirect();
  const { node } = params ?? {};
  const title =
    node?.destinationData.translatableName[config.DEFAULT_LANG] ?? node.destinationData.translatableName['en'];

  const handleGoBack = () => {
    redirect(Routes.NODE_LIST);
  };

  return (
    <Container style={nodeInfoStyles.container}>
      <Text text50BO>{title}</Text>
      <Button label='Go back' onPress={handleGoBack} />
    </Container>
  );
};
