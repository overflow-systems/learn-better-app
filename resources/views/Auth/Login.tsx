//? UTILS
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../globals/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';
import ActionButton from '../../components/ActionButton';
import LabelInput from '../../components/LabelInput';

import axios from 'axios';

export default function Login ({navigation}:any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  const LoginSubmit = () => {
    setLoading(true);

    if(email == "" || senha == "") {
      alert("Preencha com seu email e senha de acesso")
      setLoading(false);
      return;
    }
    
    let config:Object = global.api.request_post;
    
    axios({
      ...config,
      url: `${global.api.baseURL}/usuario/login`,
      data: { email, senha },
    })
    .then(async (res) => {
      let data = res.data;

      //?  SUCESSO
      if(data.status == global._enum.ResponseStatus.SUCCESS) {
        let session = { id: data.id, token: data.token }
        await AsyncStorage.setItem("session", JSON.stringify(session))
        navigation.navigate("App", { screen: "Index"});
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
    <Container style={{justifyContent: 'space-between'}} loading={loading} alert={alert}>
      <View>
        <Image source={global.images.Logo.HorizontalWhite} style={styles.logo} />
        <Text style={styles.desc}>Entre com os dados da sua conta para continuar</Text>
      </View>

      <View style={styles.content}>
        <LabelInput text="Email" required={true}>
          <TextInput keyboardType='email-address' placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
        </LabelInput>

        <LabelInput text="Senha" required={true}>
          <TextInput placeholder="***********" style={{flexShrink: 0}} secureTextEntry={true} onChangeText={(val:string) => setSenha(val)} />

          <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate("Auth", { screen: "ForgotPassword"} )}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </LabelInput>
      </View>
      
      <View style={{marginVertical: 50}}>
        <ActionButton onPress={LoginSubmit}>Entrar</ActionButton>

        <TouchableOpacity onPress={() => {navigation.navigate("Auth", { screen: "CreateAccount_Intro"})}} style={styles.account}>
          <Text style={styles.account_text}>Ainda não tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
  },

  desc: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center'
  },

  top: {
    alignItems: 'center',
    marginBottom: 20
  },

  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center'
  },

  forgot: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 6
  },

  account: {
    marginTop: 10
  },

  account_text: {
    textAlign: 'center'
  }
});