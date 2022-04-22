import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//? ROUTES
import Login from '../views/Auth/Login';

//  FORGOT PASSWORD
import ForgotPassword from '../views/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordConfirmation from '../views/Auth/ForgotPassword/Confirmation';

//  CREATE ACCOUNT
import CreateAccountIntro from '../views/Auth/CreateAccount/Intro';
import CreateAccountForm from '../views/Auth/CreateAccount/Form';
import CreateAccountTags from '../views/Auth/CreateAccount/Tags';
import CreateAccountConfirmation from '../views/Auth/CreateAccount/Confirmation';

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

      {/* FORGOT PASSWORD */}
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
        options={{...headerConfig, headerTitle: () => (<Header text="Esqueci minha senha" />) }} />

      <Stack.Screen name="ForgotPassword_Confirmation" component={ForgotPasswordConfirmation}
        options={{headerShown: false}} />
      
      {/* CREATE ACCOUNT */}
      <Stack.Screen name="CreateAccount_Intro" component={CreateAccountIntro}
        options={{...headerConfig, headerTitle: () => (<Header text="Criar Conta" />) }} />

      <Stack.Screen name="CreateAccount_Form" component={CreateAccountForm}
        options={{...headerConfig, headerTitle: () => (<Header text="Criar Conta" />) }} />

      <Stack.Screen name="CreateAccount_Tags" component={CreateAccountTags}
        options={{...headerConfig, headerTitle: () => (<Header text="Criar Conta" />) }} />

      <Stack.Screen name="CreateAccount_Confirmation" component={CreateAccountConfirmation}
        options={{...headerConfig, headerTitle: () => (<Header text="Criar Conta" />) }} />
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
