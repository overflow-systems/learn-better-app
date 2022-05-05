//? UTILS
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { global } from '../../../../globals/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';
import ActionButton from '../../../components/ActionButton';
import LabelInput from '../../../components/LabelInput';

import axios from 'axios';

export default function ForgotPassword ({navigation}:any) {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  let config:Object = global.api.request_put;

  const submit = () => {
    axios({
      ...config,
      url: `${global.api.baseURL}/usuario/esqueci-minha-senha`,
      data: { email }
    })
    .then(async (res) => {
      let data = res.data;

      console.log(res.data);
      

      //?  SUCESSO
      if(data.status == global._enum.ResponseStatus.SUCCESS) {
        navigation.navigate("Auth", { screen: "ForgotPassword_Confirmation", params: { new_pass: res.data.senha }});
        return;
      }

      const message = data.mensagem ?? data.validation?.body?.message;

      //?  NÃO AUTORIZADO
      if(data.status == global._enum.ResponseStatus.UNAUTHORIZED) {
        alert(message)
        return;
      }
      
      //?  BAD REQUEST
      if(data.status == global._enum.ResponseStatus.BAD_REQUEST) {
        alert(message)
        return;
      }

      alert(message)
    })
    .catch(res => {
      alert("Erro interno, tente novamente")
      console.log(res)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <Container loading={loading}>
      <Text style={styles.desc}>Entre com o email da conta que deseja recuperar</Text>

      <LabelInput text="Email" required={true}>
        <TextInput placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
      </LabelInput>
      
      <View>
        <ActionButton context="Auth" onPress={submit}>Continuar</ActionButton>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  desc: {
    alignSelf: 'center',
    marginBottom: 40
  },

  top: {
    alignItems: 'center',
    marginBottom: 20
  }
});