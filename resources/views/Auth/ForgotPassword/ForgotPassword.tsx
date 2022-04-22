//? UTILS
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';
import ActionButton from '../../../components/ActionButton';
import LabelInput from '../../../components/LabelInput';

export default function ForgotPassword ({navigation}:any) {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Text style={styles.desc}>Entre com o email da conta que deseja recuperar</Text>

      <LabelInput text="Email" required={true}>
        <TextInput placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
      </LabelInput>
      
      <View>
        <ActionButton context="Auth" navigation={navigation} screen={"ForgotPassword_Confirmation"}>Continuar</ActionButton>
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