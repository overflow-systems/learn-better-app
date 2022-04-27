//? UTILS
import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

//? COMPONENTS
import LabelInput from '../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';

export default function CreateAccountIntro ({setNome, setSobrenome, setEmail, setCelular}:any) {
  const cellphone_raw = (val:string, settings:any) => {
    let result = val;

    //? replaceAll não funciona, necessário fazer manualmente
    result = result.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");

    return result;
  }

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
        <TextInputMask
        type={'custom'}
        options={{
          mask: '(99) 99999-9999',
          getRawValue: (val, settings) => cellphone_raw(val, settings)
        }}
        placeholder="(00) 00000-0000"
        includeRawValueInChangeText={true}
        onChangeText={(val:string, raw:string|undefined) => setCelular(raw)}/>
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