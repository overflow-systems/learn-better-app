//? UTILS
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { global } from '../../globals/global';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

let colors = {
  principal: global.colors.danger
}

export default function Modal ({title, desc, success, confirm, onConfirm, onCancel}:any) {
  if(success) colors.principal = global.colors.success
  else colors.principal = global.colors.danger

  return (
    <View style={styles.container}>
      <View style={styles.background} />

      <View style={styles.content}>
        {success ? <Icon name="checkcircleo" size={70} color={colors.principal} /> : <Icon name="closecircleo" size={70} color={colors.principal} />}

        <Text style={[styles.title, { color: colors.principal }]}>{title}</Text>

        <Text style={styles.desc}>{desc}</Text>

        <View style={styles.buttons_row}>
          <TouchableOpacity onPress={onCancel} style={[styles.button, styles.secundary_button, { borderColor: colors.principal }]}>
            <Text style={[styles.button_text, styles.secundary_text, { color: colors.principal }]}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onConfirm} style={[styles.button, { backgroundColor: colors.principal, borderColor: colors.principal }]}>
            <Text style={styles.button_text}>{confirm}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 999,
  },
  
  background: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: .4,
    position: 'absolute',
    top: 0,
    left: 0
  },

  content: {
    backgroundColor: global.colors.lightGray,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    maxWidth: 390,
  },

  title: {
    fontSize: 22,
    fontFamily: global.fonts.SourceSansPro.w700,
    color: colors.principal,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },

  desc: {
    fontSize: 18,
    textAlign: 'center',
  },

  buttons_row: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: colors.principal,
    padding: 16,
    minWidth: 150,
    width: '48%',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: colors.principal
  },

  secundary_button: {
    backgroundColor: 'transparent',
  },

  secundary_text: {
    color: colors.principal
  },
  
  button_text: {
    color: "#FFF",
    fontFamily: global.fonts.SourceSansPro.w900,
    alignSelf: 'center',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});