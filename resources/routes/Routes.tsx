//? NAVIGATION
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { global } from '../../globals/global';

//? ROUTES
import Auth from './Auth';
import App from './App';

export default function Routes() {
  return (
    <NavigationContainer theme={{
      dark: true,
      colors: {
        primary: global.colors.blue,
        background: global.colors.background,
        card: global.colors.lightGray,
        text: global.colors.lighterGray,
        border: global.colors.background,
        notification: global.colors.lightGray,
      }
      }}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
        <Stack.Screen name="App" component={App} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}