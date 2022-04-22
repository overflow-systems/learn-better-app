//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';

export default function CreateAccountIntro ({navigation}:any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <View style={styles.form}>
      <LabelInput text="Nome" required={true}>
        <TextInput placeholder="Afonso Chaves da Silva" onChangeText={(val:string) => setNome(val)} />
      </LabelInput>

      <LabelInput text="Email" required={true}>
        <TextInput keyboardType='email-address' placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
      </LabelInput>

      <LabelInput text="Telefone" required={true}>
        <TextInputMask type={'cel-phone'} placeholder="(00) 0000-0000" value={telefone} onChangeText={text => setTelefone(text)}/>
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