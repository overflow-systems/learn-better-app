//? UTILS
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../globals/global';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';
import ActionButton from '../../components/ActionButton';
import LabelInput from '../../components/LabelInput';

//? ROUTES

export default function Login ({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container style={{justifyContent: 'space-between'}}>
      <View>
        <Image source={global.images.Logo.HorizontalWhite} style={styles.logo} />
        <Text style={styles.desc}>Entre com os dados da sua conta para continuar</Text>
      </View>

      <View style={styles.content}>
        <LabelInput text="Email" required={true}>
          <TextInput placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
        </LabelInput>

        <LabelInput text="Senha" required={true}>
          <TextInput placeholder="***********" style={{flexShrink: 0}} secureTextEntry={true} onChangeText={(val:string) => setPassword(val)} />

          <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate("Auth", { screen: "ForgotPassword"} )}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </LabelInput>
      </View>
      
      <View style={{marginVertical: 50}}>
        <ActionButton route="Home">Entrar</ActionButton>

        <TouchableOpacity style={styles.account}>
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
    alignSelf: 'center'
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