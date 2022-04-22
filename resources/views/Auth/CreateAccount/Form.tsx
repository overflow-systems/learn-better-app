//? UTILS
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../../globals/global';
import { useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';

//? STEPS
import Step01 from './Step-01';
import Step02 from './Step-02';
import Step03 from './Step-03';

import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateAccountIntro ({navigation}:any) {
  const [step, setStep] = useState(1);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  var Content;

  const final_step = 3;

  if(step == 1) Content = <Step01 />
  if(step == 2) Content = <Step02 />
  if(step == 3) Content = <Step03 />

  return (
    <Container>
      <Text style={styles.desc}>Preencha com seus dados pessoais</Text>
      <Text style={styles.desc}>(campos com <Text style={{color: global.colors.red}}> * </Text> são obrigatórios):</Text>

      {Content}

      <TouchableOpacity onPress={() => step < final_step ? setStep(step+1) : navigation.navigate("Auth", { screen: "CreateAccount_Tags"})} style={styles.next}>
        <Text style={styles.next_desc}>Continuar</Text>

        <Icon name="caretright" size={20} color={global.colors.lighterGray} />
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  desc: {
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 300
  },

  form: {
    marginTop: 40,
    flex: 1
  },

  next: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20
  },

  next_desc: {
    fontSize: 18,
    marginRight: 10
  }
});