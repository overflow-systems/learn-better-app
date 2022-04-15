//? UTILS
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../globals/global';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';
import ActionButton from '../../components/ActionButton';

//? ROUTES

export default function Home ({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <View style={styles.top}>
        <Image source={global.images.Logo.HorizontalWhite} style={styles.logo} />

        <Text style={styles.desc}>Entre com os dados da sua conta para continuar</Text>
      </View>

      <View style={styles.content}>

        <View style={styles.label}>
          <Text style={styles.label_desc}>Email <Text style={{color: global.colors.red}}>*</Text>:</Text>
          <TextInput placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
        </View>

        <View style={styles.label}>
          <Text style={styles.label_desc}>Senha <Text style={{color: global.colors.red}}>*</Text>:</Text>
          <TextInput placeholder="***********" secureTextEntry={true} onChangeText={(val:string) => setPassword(val)} />

          <TouchableOpacity style={styles.forgot}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  desc: {
    marginTop: 20
  },

  top: {
    alignItems: 'center',
    marginBottom: 20
  },

  logo: {
    width: 200,
    height: 100,
  },

  label: {
    width: '100%',
    marginBottom: 40
  },

  label_desc: {
    marginLeft: 28,
    marginBottom: 5,
    fontSize: 16
  },

  forgot: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 14
  },

  bottom: {
    marginBottom: 20
  },

  account: {
    marginTop: 10
  },
  account_text: {
    textAlign: 'center'
  }
});