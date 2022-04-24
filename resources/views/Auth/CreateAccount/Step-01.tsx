//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';

export default function CreateAccountIntro ({setNome, setSobrenome, setEmail, setCelular}:any) {

  return (
    <View style={styles.form}>
      <LabelInput text="Nome" required={true}>
        <TextInput placeholder="Afonso" onChangeText={(val:string) => {setNome(val)}} />
      </LabelInput>

      <LabelInput text="Sobrenome" required={true}>
        <TextInput placeholder="Chaves da Silva" onChangeText={(val:string) => {setSobrenome(val)}} />
      </LabelInput>

      <LabelInput text="Email" required={true}>
        <TextInput keyboardType='email-address' placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
      </LabelInput>

      <LabelInput text="Telefone" required={true}>
        <TextInputMask type={'cel-phone'} placeholder="(00) 0000-0000" onChangeText={text => setCelular(text)}/>
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