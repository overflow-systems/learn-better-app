//? UTILS
import { StyleSheet, View, TextInput, Text } from 'react-native';

import { global } from '../../../../../globals/global';

//? COMPONENTS
import LabelInput from '../../../../components/LabelInput';

export default function CreateAccountIntro ({setSenha, setConfirmarSenha}:any) {
  return (
    <View style={styles.form}>
      <LabelInput text="Senha" required={true}>
        <TextInput placeholder="*********" secureTextEntry={true} onChangeText={(val:string) => setSenha(val)} />
      </LabelInput>

      <LabelInput text="Confirmar senha" required={true}>
        <TextInput placeholder="*********" secureTextEntry={true} onChangeText={(val:string) => setConfirmarSenha(val)} />
      </LabelInput>

      <Text style={styles.desc}>Para sua segurança, sua senha deve atender as regras:</Text>

      <View style={styles.list}>
        <View style={[styles.disc]} />
        <Text>Pelo menos uma letra <Text style={styles.bold}>maiúscula</Text></Text>
      </View>

      <View style={styles.list}>
        <View style={styles.disc} />
        <Text>Pelo menos uma letra <Text style={styles.bold}>minúscula</Text></Text>
      </View>

      <View style={styles.list}>
        <View style={styles.disc} />
        <Text>Pelo menos <Text style={styles.bold}>8</Text> caracteres</Text>
      </View>

      <View style={styles.list}>
        <View style={styles.disc} />
        <Text>Pelo menos <Text style={styles.bold}>um</Text> número</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    flex: 1
  },
  
  desc: {
    textAlign: 'center',
    maxWidth: 250,
    alignSelf: 'center',
    marginBottom: 20
  },
  
  list: {
    textAlign: 'center',
    maxWidth: 250,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  bold: {
    fontFamily: global.fonts.SourceSansPro.w600,
    color: "#FFF"
  },

  disc: {
    width: 4,
    height: 4,
    backgroundColor: global.colors.lighterGray,
    borderRadius: 500,
    marginRight: 4
  },

  disc_valid: {
    backgroundColor: '#FFF'
  }
});