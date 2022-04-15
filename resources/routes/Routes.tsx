//? NAVIGATION
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//? ROUTES
import Auth from './Auth';
import App from './App';

export default function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
        <Stack.Screen name="App" component={App} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}