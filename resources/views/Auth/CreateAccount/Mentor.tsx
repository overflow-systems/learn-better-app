//? UTILS
import { StyleSheet, Text, View, Image } from 'react-native';

import { global } from '../../../../globals/global';

//? COMPONENTS
import Container from '../../../components/Container';
import ActionButton from '../../../components/ActionButton';

const Mentor = require('../../../../assets/images/icons/mentor.png');

export default function CreateAccount_Mentor ({navigation}:any) {
  return (
    <Container>
      <View style={styles.circle}>
        <Image style={styles.icon} source={Mentor} />
      </View>
      <Text style={styles.item_text}>Quero ser </Text>
      <Text style={styles.bold}>MENTOR</Text>

      <Text style={styles.desc}>Quero prestar mentoria para iniciantes de uma área de estudo específica em que tenho experiência.</Text>
      <ActionButton navigation={navigation} context="Auth" screen="CreateAccount_Form" params={{tipo: 'mentor'}}>Quero ser MENTOR</ActionButton>
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

  item_text: {
    color: '#FFF',
    textAlign: 'center'
  },
  
  bold: {
    color: "#FFF",
    fontFamily: global.fonts.SourceSansPro.w700,
    textAlign: 'center',
    marginBottom: 20
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 5000,
    backgroundColor: global.colors.lighterGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    alignSelf: 'center'
  },

  icon: {
    width: '50%',
    height: '50%'
  }
});