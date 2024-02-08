import { useState } from 'react';
import { Text, View } from 'react-native';
import EstablishmentNode from '../../../../../domain/models/EstablishmentNode';
import { Collapsable } from '../../../../components';
import { Routes } from '../../../../constants/routes';
import { config } from '../../../../../../config';
import { useRedirect } from '../../../../hooks';
import { nodeItemStyles } from './style';

type SubnodeListProps = {
  subnodes: EstablishmentNode[];
};

export const SubnodeList = ({ subnodes }: SubnodeListProps) => (
  <View style={nodeItemStyles.subnodeWrapper}>
    {subnodes.map((subnode, index) => (
      <NodeItem key={index} node={subnode} />
    ))}
  </View>
);

type NodeItemProps = {
  node: EstablishmentNode;
};

export const NodeItem = ({ node }: NodeItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const redirect = useRedirect();
  const title =
    node.destinationData.translatableName[config.DEFAULT_LANG] ?? node.destinationData.translatableName['en'];

  const handlePressFinalNode = () => {
    redirect(Routes.NODE_INFO, { node });
  };

  return (
    <View>
      <View style={nodeItemStyles.headerWrapper}>
        <Text
          style={node.isTop ? nodeItemStyles.topDestination : undefined}
          onPress={node.isFinalNode ? handlePressFinalNode : undefined}
        >
          {title}
        </Text>
        {Boolean(node?.childs?.length) && <Collapsable onChange={(isOpen) => setIsCollapsed(isOpen)} />}
      </View>
      {isCollapsed && <SubnodeList subnodes={node.childs} />}
    </View>
  );
};
