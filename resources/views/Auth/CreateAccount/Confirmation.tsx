//? UTILS
import { StyleSheet, Text, Image } from 'react-native';

//? COMPONENTS
import Container from '../../../components/Container';
import ActionButton from '../../../components/ActionButton';

const Confirmation = require('../../../../assets/images/confirmation.png');

export default function CreateAccountConfirmation ({navigation}:any) {
  return (
    <Container>
      <Text style={styles.desc}>Tudo certo!</Text>

      <Text style={styles.desc}>Você já pode aproveitar os benefícios da plataforma <Text style={{color: "#FFF"}}>Learn Better!</Text></Text>

      <Text style={styles.desc}>Bons estudos</Text>

      <Image source={Confirmation} style={styles.hero} />

      <ActionButton navigation={navigation} context="Auth" screen="Login">Acessar a plataforma</ActionButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  desc: {
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 350,
    fontSize: 18,
    marginBottom: 10
  },

  content: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
  },

  hero: {
    alignSelf: 'center',
    marginVertical: 75
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