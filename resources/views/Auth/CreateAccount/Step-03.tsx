//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

export default function CreateAccountIntro ({setSenha, setConfirmarSenha}:any) {
  return (
    <View style={styles.form}>
      <LabelInput text="Senha" required={true}>
        <TextInput placeholder="*********" secureTextEntry={true} onChangeText={(val:string) => setSenha(val)} />
      </LabelInput>

      <LabelInput text="Confirmar senha" required={true}>
        <TextInput placeholder="*********" secureTextEntry={true} onChangeText={(val:string) => setConfirmarSenha(val)} />
      </LabelInput>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    flex: 1
  }
});