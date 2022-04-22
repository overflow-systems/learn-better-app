//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

export default function CreateAccountIntro ({navigation}:any) {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <View style={styles.form}>
      <LabelInput text="Senha" required={true}>
        <TextInput placeholder="*********" onChangeText={(val:string) => setSenha(val)} />
      </LabelInput>

      <LabelInput text="Confirmar senha" required={true}>
        <TextInput placeholder="*********" onChangeText={(val:string) => setConfirmarSenha(val)} />
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