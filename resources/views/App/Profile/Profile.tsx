//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../../globals/global';

import IconFT from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pic = require('../../../../assets/images/profile.png');

//? COMPONENTS
import Container from '../../../components/Container';

export default function Profile ({navigation}:any) {
  return (
    <Container style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <ScrollView style={{ paddingHorizontal: 20}}>
        <TouchableOpacity onPress={() => { navigation.navigate("App", { screen: "Profile_Edit" }) }} style={styles.pic_container}>
          <Image source={Pic} style={styles.pic} />

          <View style={styles.pic_icon}>
            <Icon name="pen" size={16} color={global.colors.background} />
          </View>
        </TouchableOpacity>

        <Text style={styles.name}>Ismael Rafael da Silva Sousa</Text>
        <Text style={styles.member}>Membro desde 19/01/2022</Text>

        <View style={styles.label_row}>
          <View style={styles.label_container}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>ismaelrsousa.contato@gmail.com</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>(13) 98100-7944</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Data de Nascimento:</Text>
            <Text style={styles.value}>14/07/2001</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Sexo:</Text>
            <Text style={styles.value}>Masculino</Text>
          </View>

          <View style={[styles.label_container, styles.half]}>
            <Text style={styles.label}>Senha:</Text>
            <Text style={styles.value}>***********</Text>
          </View>

          <View style={styles.label_container}>
            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.value}>499.042.178-74</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Icon name="user-alt" color={global.colors.textGray} size={16} style={{marginRight: 10}} />
            <Text style={styles.button_text}>Editar minhas áreas de interesse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="user-alt" color={global.colors.textGray} size={16} style={{marginRight: 10}} />
            <Text style={styles.button_text}>Quero uma conta de Mentor</Text>
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