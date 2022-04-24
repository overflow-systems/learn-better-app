//? UTILS
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { global } from '../../globals/global';
import Constants from 'expo-constants';

import Loading from './Loading';

export default function Container ({style, children, loading, alert}:any) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3C3E4D" />

      <KeyboardAvoidingView behavior='height' style={[styles.content, style ]}>
        {loading? <Loading /> : null}

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
    paddingHorizontal: 30,
    flex: 1,
  }
});
