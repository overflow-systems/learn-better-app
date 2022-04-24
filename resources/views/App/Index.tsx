//? UTILS
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../globals/global';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';
import ActionButton from '../../components/ActionButton';
import LabelInput from '../../components/LabelInput';

export default function Login ({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("session");

      navigation.navigate("Auth", { screen: "Login" })
    }
    catch (e) {
      alert(e)
    }
  }

  return (
    <Container style={{justifyContent: 'space-between'}}>
      <Text onPress={Logout}>Deslogar</Text>
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