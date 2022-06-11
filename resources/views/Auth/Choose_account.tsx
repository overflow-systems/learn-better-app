//? UTILS
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { global } from '../../../globals/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';

const Mentor = require('../../../assets/images/icons/mentor.png');
const Mentee = require('../../../assets/images/icons/mentee.png');

export default function Choose_account ({route, navigation}:any) {
  const [loading, setLoading] = useState(false);

  const Login = async (tipo:string) => {
    setLoading(true);

    let session = route.params.session;

    session.tipo = tipo;
    
    await AsyncStorage.setItem("session", JSON.stringify(session))
    navigation.navigate("App", { screen: "Index"});
  }

  return (
    <Container>
      <Text style={styles.desc}>Selecione o tipo de conta que deseja fazer o login:</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => { Login("mentor") }} style={styles.item}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={Mentor} />
          </View>
          <Text style={styles.item_text}>Entrar como </Text>
          <Text style={styles.bold}>MENTOR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => { Login("mentorado") }} style={styles.item}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={Mentee} />
          </View>
          <Text style={styles.item_text}>Entrar como </Text>
          <Text style={styles.bold}>MENTORADO</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  desc: {
    alignSelf: 'center',
    marginBottom: 40,
    textAlign: 'center',
    maxWidth: 300
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
    maxWidth: 300,
    width: '100%',
    alignSelf: 'center',
  },

  item: {
    maxWidth: '50%',
    width: '100%',
    alignItems: 'center',
  },

  item_text: {
    color: '#FFF',
    textAlign: 'center'
  },
  
  bold: {
    color: "#FFF",
    fontFamily: global.fonts.SourceSansPro.w700,
    textAlign: 'center'
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 5000,
    backgroundColor: global.colors.lighterGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  icon: {
    width: '50%',
    height: '50%'
  }
});