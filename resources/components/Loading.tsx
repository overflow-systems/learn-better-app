//? UTILS
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';

export default function Loading ({style, children}:any) {
  return (
    <View style={styles.container}>
      <View style={styles.background} />

      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 999
  },

  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: "#000",
    opacity: .5,
  },

  loading: {
    fontSize: 20
  }
});
