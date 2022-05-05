//? UTILS
import { StyleSheet, Text, View } from 'react-native';
import { global } from '../../../../globals/global';

//? COMPONENTS
import Container from '../../../components/Container';
import ActionButton from '../../../components/ActionButton';

import Icon from 'react-native-vector-icons/Entypo';

export default function Confirmation ({navigation, route}:any) {
  return (
    <Container style={{paddingTop: 100}}>
      <View style={styles.circle}>
        <Icon name="check" size={50} color="#FFF"/>
      </View>

      <Text style={{color: "#FFF", textAlign: 'center'}}>Tudo certo!</Text>

      {/* <Text style={{textAlign: 'center', marginTop: 10}}>Uma mensagem foi enviada para o email <Text style={{color:"#FFF"}}>example@email.com</Text> com as intruções para a recuperação da sua conta</Text> */}

      <Text style={{textAlign: 'center', marginTop: 10}}>
        Sua nova senha é
        <Text style={styles.password}>{route.params.new_pass}</Text>
      </Text>

      <ActionButton style={{marginTop: 40}} navigation={navigation} screen="Login">Voltar</ActionButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50000,
    backgroundColor: global.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },

  top: {
    alignItems: 'center',
    marginBottom: 20
  },

  password: {
    color: '#FFF'
  }
});