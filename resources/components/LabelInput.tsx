//? UTILS
import { StyleSheet, View, Text } from 'react-native';
import { global } from '../../globals/global';

export default function Container ({text, required = false, children}:any) {
  return (
    <View style={styles.label}>
      <Text style={styles.label_desc}>{text}
        {required? <Text style={{color: global.colors.red}}> * </Text> : ''}:
        </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    width: '100%',
    marginBottom: 40
  },

  label_desc: {
    marginLeft: 28,
    marginBottom: 5,
    fontSize: 16
  },
});
