//? UTILS
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { global } from '../../../../globals/global';
import { useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';
import Tags from '../../../components/Tags';

//? STEPS
import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateAccountIntro ({navigation}:any) {
  const tags = [
    {index: 1, label: "Informática"},
    {index: 2, label: "TI"},
    {index: 3, label: "Programação"},
    {index: 4, label: "Teste"}
  ]
  // const [tags, setTags] = useState([]);

  return (
    <Container>
      <Text style={styles.desc}>Quase lá!</Text>
      <Text style={styles.desc}>Agora selecione os itens que mais se encaixam no programa de mentoria que você procura</Text>

      <View style={styles.content}>
        <Tags list={tags} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Auth", { screen: "CreateAccount_Confirmation"})} style={styles.next}>
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
    maxWidth: 350
  },

  content: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
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