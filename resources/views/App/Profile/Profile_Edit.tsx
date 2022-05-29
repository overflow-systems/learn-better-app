//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { global } from '../../../../globals/global';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { TextInputMask } from 'react-native-masked-text';

import { Picker } from '@react-native-picker/picker';

import LabelInput from '../../../components/LabelInput';
import ActionButton from '../../../components/ActionButton';

const Pic = require('../../../../assets/images/profile.png');

//? COMPONENTS
import Container from '../../../components/Container';

export default function Profile_Edit ({navigation}:any) {
  const [session, setSession] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>();

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState<string | undefined>("")
  
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  useEffect(() => {
    async function getSession() { 
      let ret:string = await AsyncStorage.getItem("session")??"";
      setSession(JSON.parse(ret));
    }

    getSession()
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${global.api.baseURL}/usuario/buscarLogin`,
      headers: {
        id: session.id,
        token: session.token,
        tipo: session.tipo
      }
    })
    .then(res => {
      let data = res.data;
  
      setLoading(false);
      
      setNome(data.nome);
      setSobrenome(data.sobrenome);
      setEmail(data.email);
      setCelular(data.celular);
      setGenero(data.genero);
      setDataNascimento(data.data_nascimento);
    })
    .catch(res => { 
      setLoading(false);
      console.log(res);
      alert("Ocorreu um erro inesperado");
    });
  }, [session])

  const cellphone_raw = (val:string, settings:any) => {
    let result = val;

    //? replaceAll não funciona, necessário fazer manualmente
    result = result.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");

    return result;
  }

  const date_raw = (val:string, settings:any) => {
    if(val.length == 10 ) {
      const ano = val[6] + val[7] + val[8] + val[9];
      const mes = val[3] + val[4];
      const dia = val[0] + val[1];
      return `${ano}/${mes}/${dia}`;
    }
    else return;
  };

  return (
    <Container loading={loading} style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <ScrollView style={{ paddingHorizontal: 20}}>
        <TouchableOpacity style={styles.pic_container}>
          <Image source={Pic} style={styles.pic} />
        </TouchableOpacity>

        <LabelInput text="Nome" required={true}>
          <TextInput placeholder="Afonso" value={nome} onChangeText={(val:string) => {setNome(val)}} />
        </LabelInput>

        <LabelInput text="Sobrenome" required={true}>
          <TextInput placeholder="Chaves da Silva" value={sobrenome} onChangeText={(val:string) => {setSobrenome(val)}} />
        </LabelInput>

        <LabelInput text="Email" required={true}>
          <TextInput keyboardType='email-address' value={email} placeholder="example@email.com.br" onChangeText={(val:string) => setEmail(val)} />
        </LabelInput>

        <LabelInput text="Celular" required={true}>
          <TextInputMask
          type={'custom'}
          value={celular}
          options={{
            mask: '(99) 99999-9999',
            getRawValue: (val, settings) => cellphone_raw(val, settings)
          }}
          placeholder="(00) 00000-0000"
          includeRawValueInChangeText={true}
          onChangeText={(val:string, raw:string|undefined) => setCelular(raw)}/>
        </LabelInput>

        <LabelInput text="Genero" required={true}>
          <View style={styles.picker}>
            <Picker selectedValue={genero} onValueChange={(val:string) => {setGenero(val)}} dropdownIconColor={global.colors.lighterGray} style={{color: '#FFF'}}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Masculino" value={1} />
              <Picker.Item label="Feminino" value={2} />
              <Picker.Item label="Outros" value={3} />
            </Picker>
          </View>
        </LabelInput>

        <LabelInput text="Data de Nascimento" required={true}>
          <TextInputMask
            type={'custom'}
            value={dataNascimento}
            options={{
              mask: '99/99/9999',
              getRawValue: (val, settings) => date_raw(val, settings)
            }}
            placeholder="DD/MM/AAAA"
            onChangeText={(val:string, raw:string|undefined) => { setDataNascimento(raw??val) }}
            includeRawValueInChangeText={true}
          />
        </LabelInput>

        <ActionButton onPress={() => {}}>Salvar</ActionButton>

        <TouchableOpacity onPress={() => navigation.navigate("App", { screen: "Profile" })} style={styles.cancel}>
          <Text style={styles.cancel_text}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  pic_container: {
    alignSelf: 'center'
  },

  pic: {
    width: 140,
    height: 140,
    borderRadius: 5000
  },

  pic_icon: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 30,
    height: 30,
    backgroundColor: global.colors.textGray,
    borderRadius: 5000,
    justifyContent: 'center',
    alignItems: 'center'
  },

  picker: {
    backgroundColor: global.colors.lightGray,
    borderRadius: 500,
    fontSize: 16,
    padding: 3,
    paddingHorizontal: 16,
  },

  cancel: {
    padding: 20,
    marginBottom: 20
  },

  cancel_text: {
    textAlign: 'center',
    alignSelf: 'center'
  }
});