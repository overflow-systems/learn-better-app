//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { global } from '../../../../globals/global';
import axios from 'axios';

import IconFT from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pic = require('../../../../assets/images/profile.png');

//? COMPONENTS
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';


export default function Profile ({route, navigation}:any) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>();

  const { session } = route.params;

  const getProfile = async () => {
    let retorno = await global.api.methods.buscarPerfil(session);
    setLoading(false);
    setProfile(retorno);
    console.log(retorno);
    
  }

  useEffect(() => {
    getProfile();
  }, [])

  const Logout = async () => {
    await AsyncStorage.removeItem("session");
    navigation.navigate("Auth", { screen: "Login" })
  }
  
  return (
    <Container loading={loading} style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <ScrollView style={{ paddingHorizontal: 20}}>
        <TouchableOpacity onPress={() => { navigation.navigate("App", { screen: "Profile_Edit" }) }} style={styles.pic_container}>
          <Image source={Pic} style={styles.pic} />

          <View style={styles.pic_icon}>
            <Icon name="pen" size={16} color={global.colors.background} />
          </View>
        </TouchableOpacity>

        <Text style={styles.name}>{profile?.nome} {profile?.sobrenome}</Text>
        <Text style={styles.member}>Membro desde {Date.parse(profile?.data_criacao)}</Text>

        <View style={styles.label_row}>
          <View style={styles.label_container}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{profile?.email}</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>{profile?.celular}</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Data de Nascimento:</Text>
            <Text style={styles.value}>{profile?.data_nascimento}</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Gênero:</Text>
            <Text style={styles.value}>{global._enum.Genero[profile?.genero??0]}</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Senha:</Text>
            <Text style={styles.value}>{profile? "***********" : ""}</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity  onPress={() => { navigation.navigate("App", { screen: "Profile_Tags" }) }} style={styles.button}>
            <Icon name="user-alt" color={global.colors.textGray} size={16} style={{marginRight: 10}} />
            <Text style={styles.button_text}>Editar minhas áreas de interesse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="user-alt" color={global.colors.textGray} size={16} style={{marginRight: 10}} />
            <Text style={styles.button_text}>Quero uma conta de Mentor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={Logout}>
            <IconFT name="log-out" color={global.colors.textGray} size={16} style={{marginRight: 10}} />
            <Text style={[styles.button_text]}>Deslogar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconFT name="block" color={global.colors.danger} size={16} style={{marginRight: 10}} />
            <Text style={[styles.button_text, styles.block]}>Desativar Conta</Text>
          </TouchableOpacity>
        </View>
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

  name: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
    fontFamily: global.fonts.SourceSansPro.w600
  },

  member: {
    textAlign: 'center',
    fontSize: 18,
    color: global.colors.lighterGray,
    fontFamily: global.fonts.SourceSansPro.w600,
    marginBottom: 20
  },

  label_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  label_container: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '100%'
  },

  label: {
    color: "#FFF",
    textAlign: 'center'
  },
  
  value: {
    lineHeight: 18,
    fontFamily: global.fonts.SourceSansPro.w400,
    textAlign: 'center'
  },

  half: {
    maxWidth: '48%'
  },

  bottom: {
    alignItems: 'center',
    marginTop: 20
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },

  button_text: {
    fontFamily: global.fonts.SourceSansPro.w600
  },

  block: {
    color: global.colors.danger
  }
});