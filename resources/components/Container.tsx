//? UTILS
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { global } from '../../globals/global';
import Constants from 'expo-constants';

export default function Container ({style, children}:any) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3C3E4D" />

      <KeyboardAvoidingView behavior='padding' style={[styles.content, style]}>
        {children}
      </KeyboardAvoidingView>
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
    padding: 20,
    maxWidth: 420,
    flex: 1,
  }
});
