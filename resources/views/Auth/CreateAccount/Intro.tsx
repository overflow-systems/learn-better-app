//? UTILS
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { global } from '../../../../globals/global';

//? COMPONENTS
import Container from '../../../components/Container';

const Mentor = require('../../../../assets/images/icons/mentor.png');
const Mentee = require('../../../../assets/images/icons/mentee.png');

export default function CreateAccountIntro ({navigation}:any) {
  return (
    <Container>
      <Text style={styles.desc}>Antes de seguir para seus dados, selecione o tipo de conta que você deseja criar:</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => {navigation.navigate("Auth", { screen: "CreateAccount_Form", params: { tipo: 'mentor' } })}} style={styles.item}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={Mentor} />
          </View>
          <Text style={styles.item_text}>Quero ser </Text>
          <Text style={styles.bold}>MENTOR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {navigation.navigate("Auth", { screen: "CreateAccount_Form", params: { tipo: 'mentorado' }})}} style={styles.item}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={Mentee} />
          </View>
          <Text style={styles.item_text}>Quero ser </Text>
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