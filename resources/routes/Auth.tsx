import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//? ROUTES
import Login from '../views/Auth/Login';
import ForgotPassword from '../views/Auth/ForgotPassword';
import ForgotPasswordConfirmation from '../views/Auth/ForgotPasswordConfirmation';

import Header from '../components/Header';

import { global } from '../../globals/global';

const headerConfig = {
  headerBackVisible: false,
  headerStyle: { backgroundColor: global.colors.lightGray },
  headerShadowVisible: false,
}

const Stack = createNativeStackNavigator();

export default function Auth () {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
        options={{
          ...headerConfig,
          headerTitle: () => (<Header text="Esqueci minha senha" />)
          }} />

      <Stack.Screen name="ForgotPasswordConfirmation" component={ForgotPasswordConfirmation}
        options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#FFF',
    fontSize: 50
  }
});
