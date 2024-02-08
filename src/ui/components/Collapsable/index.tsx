import { useEffect, useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';

type CollapsableProps = {
  item?: React.ReactNode;
  style?: ViewStyle;
  title?: string;
  onChange?: (isOpen: boolean) => void;
};

export const Collapsable = ({ title, item, onChange, style }: CollapsableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onChange?.(isOpen);
  }, [isOpen, onChange]);

  return (
    <View style={style}>
      <Text onPress={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '⬆️' : '⬇️'}
      </Text>
      {isOpen && item}
    </View>
  );
};
