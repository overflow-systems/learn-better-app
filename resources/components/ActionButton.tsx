//? UTILS
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { global } from '../../globals/global';

export default function ActionButton ({style, children, screen, context, navigation}:any) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(context, {screen})} style={[styles.button, style]}>
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
