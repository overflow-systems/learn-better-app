//? UTILS
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { global } from '../../globals/global';

export default function ActionButton ({children}:any) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: global.colors.blue,
    width: '100%',
    fontSize: 16,
    padding: 20,
    paddingHorizontal: 28,
    borderRadius: 500,
    color: '#FFF',
  },
  
  text: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 18,
    fontFamily: global.fonts.SourceSansPro.w700
  }
});
