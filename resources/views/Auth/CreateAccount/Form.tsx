//? UTILS
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { global } from '../../../../globals/global';
import { useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';

//? STEPS
import Step01 from './Steps/Step-01';
import Step02 from './Steps/Step-02';
import Step03 from './Steps/Step-03';

import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateAccountIntro ({route, navigation}:any) {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState(route.params.tipo ?? "")

  //  STEP 01
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")

  //  STEP 02
  const [genero, setGenero] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  //  STEP 03
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  var Content;

  const final_step = 3;

  if(step == 1) Content = <Step01 setNome={setNome} setSobrenome={setSobrenome} setEmail={setEmail} setCelular={setCelular} />
  if(step == 2) Content = <Step02 genero={genero} setGenero={setGenero} setCpf={setCpf} setDataNascimento={setDataNascimento} />
  if(step == 3) Content = <Step03 setSenha={setSenha} setConfirmarSenha={setConfirmarSenha} />

  const next = () => {
    if(step <= final_step) {
      let valid = false;
      let errors = [];

      if (step == 1) {
        if(!global.validation.required(nome)) errors.push({ validation: "required", field: "Nome"})
        if(!global.validation.required(sobrenome)) errors.push({ validation: "required", field: "Sobrenome"})
        if(!global.validation.required(email)) errors.push({ validation: "required", field: "Email"})
        if(!global.validation.required(celular)) errors.push({ validation: "required", field: "Celular"})

        if(!global.validation.email(email)) errors.push({ validation: "email", field: "Email"})
        if(!global.validation.celular(celular)) errors.push({ validation: "celular", field: "Celular"})
      }
      
      if (step == 2) {
        if(!global.validation.required(genero)) errors.push({ validation: "required", field: "Gênero"})
        if(!global.validation.required(dataNascimento)) errors.push({ validation: "required", field: "Data de Nascimento"})
        
        if(!global.validation.date(dataNascimento)) errors.push({ validation: "date", field: "Data de Nascimento"})
      }

      if (step == 3) {
        if(!global.validation.required(senha)) errors.push({ validation: "required", field: "Senha"})
        if(!global.validation.required(confirmarSenha)) errors.push({ validation: "required", field: "Confirmar Senha"})

        if(!global.validation.password(senha)) errors.push({ validation: "password" })

        if(senha != confirmarSenha) errors.push({ validation: "same_password" })
      }

      valid = errors.length == 0;
      
      if(valid) {
        if(step < final_step) {
          setStep(step+1);
          return;
        }
      }

      else {
        global._alert.error(errors);
        return;
      }
    }
    
    let data = { tipo, nome, sobrenome, email, celular, genero: Number(genero), data_nascimento: dataNascimento, senha }

    navigation.navigate("Auth", { screen: "CreateAccount_Tags", params: { data } })
  }

  return (
    <Container>
      <Text style={styles.desc}>Preencha com seus dados pessoais</Text>
      <Text style={styles.desc}>(campos com <Text style={{color: global.colors.red}}> * </Text> são obrigatórios):</Text>

      {Content}

      <TouchableOpacity onPress={next} style={styles.next}>
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