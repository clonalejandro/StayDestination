import { View, ViewProps } from 'react-native';
import { containerStyles } from './style';

export const Container = (props: ViewProps) => (
  <View
    {...props}
    style={{
      ...containerStyles.container,
      ...((props.style as object) ?? {}),
    }}
  />
);
