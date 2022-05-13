import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Headers/Header';
import ChatHeader from '../components/Headers/ChatHeader';
import IndexHeader from '../components/Headers/IndexHeader';

//? ROUTES
import Index from '../views/App/Index';

import Chat from '../views/App/Chat/Chat';
import Chat_Index from '../views/App/Chat/Index';

import Notifications from '../views/App/Notifications';

const Stack = createNativeStackNavigator();

import { global } from '../../globals/global';

const headerConfig = {
  headerBackVisible: false,
  headerStyle: { backgroundColor: global.colors.lightGray },
  headerShadowVisible: false,
}

export default function App ({navigation}:any) {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen name="Index" component={Index}
        options={{...headerConfig, headerTitle: () => (<IndexHeader navigation={navigation} />) }} />

      {/* CHAT */}
      <Stack.Screen name="Chat_Index" component={Chat_Index}
        options={{...headerConfig, headerTitle: () => (<Header text="Chat" />) }} />

      <Stack.Screen name="Chat" component={Chat}
        options={{...headerConfig, headerTitle: () => (<ChatHeader />) }} />

      <Stack.Screen name="Notifications" component={Notifications}
        options={{...headerConfig, headerTitle: () => (<Header text="Notificações" />) }} />
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
