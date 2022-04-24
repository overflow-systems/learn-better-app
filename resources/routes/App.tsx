import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//? ROUTES
import Index from '../views/App/Index';

const Stack = createNativeStackNavigator();

export default function App ({navigation}:any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
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
