//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { global } from '../../../../globals/global';

import Tags from '../../../components/Tags';
import ActionButton from '../../../components/ActionButton';
import axios from 'axios';



//? COMPONENTS
import Container from '../../../components/Container';
import { useState, useEffect } from 'react';

export default function Profile_Tags ({navigation}:any) {
  const [list, setList] = useState([]);
  const [tags, setTags] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${global.api.baseURL}/tag/listar`,
    })
    .then(res => {
      let data = res.data;
      
      setLoading(false)
      
      setList(data);
    })
    .catch(res => {
      setLoading(false)
      console.log(res);
      alert("Ocorreu um erro inesperado.");
    })
  }, []);

  return (
    <Container loading={loading} style={{ paddingVertical: 0 }}>
      <View style={{ justifyContent: 'space-between', flex: 1}}>
        <View>
          <Text style={styles.desc}>Selecione as tags para editar</Text>

          <Tags list={list} setTags={setTags} />
        </View>

        <ActionButton>Salvar</ActionButton>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  desc: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: global.fonts.SourceSansPro.w600,
    marginBottom: 20
  }
});