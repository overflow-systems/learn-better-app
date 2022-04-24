//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';

export default function CreateAccountIntro ({setGenero, setCpf, setDataNascimento}:any) {

  return (
    <View style={styles.form}>
      <LabelInput text="Genero" required={true}>
        <TextInput placeholder="Selecione" onChangeText={(val:string) => setGenero(val)} />
      </LabelInput>

      <LabelInput text="CPF" required={true}>
        <TextInputMask type={'cpf'} placeholder="000.000.000-00" onChangeText={(val:string) => setCpf(val)} />
      </LabelInput>

      <LabelInput text="Data de Nascimento" required={true}>
        <TextInputMask type={'datetime'} options={{format: 'DD/MM/YYYY'}} placeholder="DD/MM/AAAA" onChangeText={(val:string) => setDataNascimento(val)} />
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