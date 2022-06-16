import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Headers/Header';
import ChatHeader from '../components/Headers/ChatHeader';
import IndexHeader from '../components/Headers/IndexHeader';
import MentoryHeader from '../components/Headers/MentoryHeader';

//? ROUTES
import Index from '../views/App/Index';

import Chat from '../views/App/Chat/Chat';
import Chat_Index from '../views/App/Chat/Index';

import Notifications from '../views/App/Notifications';

import Profile from '../views/App/Profile/Profile';
import Profile_Edit from '../views/App/Profile/Profile_Edit';
import Profile_Tags from '../views/App/Profile/Profile_Tags';

import Mentory from '../views/App/Mentory/Index';

const Stack = createNativeStackNavigator();

import { global } from '../../globals/global';

const headerConfig = {
  headerBackVisible: false,
  headerStyle: { backgroundColor: global.colors.lightGray },
  headerShadowVisible: false,
}

export default function App ({route, navigation}:any) {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index"component={Index} initialParams={{session: route.params.session}}
        options={{...headerConfig, headerTitle: () => (<IndexHeader navigation={navigation} />) }} />

      {/* CHAT */}
      <Stack.Screen name="Chat_Index" component={Chat_Index}
        options={{...headerConfig, headerTitle: () => (<Header text="Chat" />) }} />

      <Stack.Screen name="Chat" component={Chat}
        options={{...headerConfig, headerTitle: () => (<ChatHeader />) }} />

      {/* NOTIFICATIOS */}
      <Stack.Screen name="Notifications" component={Notifications}
        options={{...headerConfig, headerTitle: () => (<Header text="Notificações" />) }} />

      {/* PROFILE */}
      <Stack.Screen name="Profile" component={Profile}
        options={{...headerConfig, headerTitle: () => (<Header text="Meu Perfil" />) }} />

      <Stack.Screen name="Profile_Edit" component={Profile_Edit}
        options={{...headerConfig, headerTitle: () => (<Header text="Meu Perfil" />) }} />

      <Stack.Screen name="Profile_Tags" component={Profile_Tags}
        options={{...headerConfig, headerTitle: () => (<Header text="Meu Perfil" />) }} />

      {/* MENTORY */}
      <Stack.Screen name="Mentory" component={Mentory}
        options={{...headerConfig, headerTitle: () => (<MentoryHeader text="Buscar Mentoria" />) }} />
    </Stack.Navigator>
  );
}