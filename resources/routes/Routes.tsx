//? NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

import { global } from '../../globals/global';

//? ROUTES
import Auth from './Auth';
import App from './App';
import { useEffect, useState } from 'react';

export default function Routes() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    async function getSession() {
      let async_session = await AsyncStorage.getItem("session");
      setSession(async_session);
      setIsLoading(false);
    }

    getSession();
  }, [])

  if(isLoading)
    return (<Text>Carregando...</Text>);
    
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
      <Stack.Navigator initialRouteName={session? "App" : "Auth"}>
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
        <Stack.Screen name="App" component={App} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}