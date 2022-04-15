//? UTILS
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { global } from '../../globals/global';
import Constants from 'expo-constants';

export default function Container ({children}:any) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3C3E4D" />

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: global.colors.background,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    width: '100%',
    flex: 1,
    padding: 20,
    paddingHorizontal: 30
  }
});
