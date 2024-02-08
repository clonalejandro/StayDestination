import { StyleSheet } from 'react-native';
import { ColorsSchema } from '../../../../constants/colors';

export const nodeItemStyles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  subnodeWrapper: {
    gap: 5,
    marginLeft: 5,
    marginTop: 5,
  },
  topDestination: {
    color: ColorsSchema.RED,
  },
});
