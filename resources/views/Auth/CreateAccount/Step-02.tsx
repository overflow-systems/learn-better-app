//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';

export default function CreateAccountIntro ({navigation}:any) {
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  return (
    <View style={styles.form}>
      <LabelInput text="Nome" required={true}>
        <TextInput placeholder="Selecione" onChangeText={(val:string) => setSexo(val)} />
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