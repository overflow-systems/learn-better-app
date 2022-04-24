//? UTILS
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { global } from '../../../../globals/global';
import { useEffect, useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';
import Tags from '../../../components/Tags';

//? STEPS
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

export default function CreateAccountIntro ({navigation, route}:any) {
  const data = route.params.data;

  const [list, setList] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${global.api.baseURL}/tag/listar`,
    })
    .then(res => {
      let data = res.data;

      setList(data);
    })
    .catch(res => {
      console.log(res);
    })
  }, []);

  const createAccount = () => {
    setLoading(true);

    axios({
      method: 'POST',
      url: `${global.api.baseURL}/usuario/criar`,
      data: { ...data, tags }
    })
    .then((res) => {
      //?  SUCESSO
      if(res.data.status == global._enum.ResponseStatus.SUCESSO)
        navigation.navigate("Auth", { screen: "CreateAccount_Confirmation"})

      //?  BAD REQUEST
      else
        alert(res.data.mensagem)
    })
    .catch((res) => {
      alert("Erro interno, tente novamente")
      console.log(res)
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <Container loading={loading}>
      <Text style={styles.desc}>Quase lá!</Text>
      <Text style={styles.desc}>Agora selecione os itens que mais se encaixam no programa de mentoria que você procura</Text>

      <View style={styles.content}>
        <Tags list={list} setTags={setTags} />
      </View>

      <TouchableOpacity onPress={createAccount} style={styles.next}>
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