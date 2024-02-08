import { useNavigation } from '@react-navigation/native';
import { Routes } from '../constants/routes';

export const useRedirect = () => {
  const navigation = useNavigation();

  return (route: Routes, params?: any) =>
    navigation.navigate({
      key: route,
      name: route,
      params,
    } as unknown as never);
};
