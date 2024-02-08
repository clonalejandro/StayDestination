import { NodeListScreen } from './src/ui/screens/NodeList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/ui/constants/routes';
import { NodeInfoScreen } from './src/ui/screens/NodeInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.NODE_LIST}
        screenOptions={{
          headerBackVisible: false,
        }}
      >
        <Stack.Screen name={Routes.NODE_LIST} component={NodeListScreen} />
        <Stack.Screen name={Routes.NODE_INFO} component={NodeInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
