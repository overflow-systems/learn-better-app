//? UTILS
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { global } from '../../../globals/global';

import AsyncStorage from '@react-native-async-storage/async-storage';

const profile = require('../../../assets/images/profile.png');

//? COMPONENTS
import Container from '../../components/Container';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFT from 'react-native-vector-icons/Entypo';
import IconAD from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index ({navigation}:any) {
  const [andamentoLoading, setAndamentoLoading] = useState(true);
  const [finalizadasLoading, setFinalizadasLoading] = useState(true);
  const [aguardandoLoading, setAguardandoLoading] = useState(true);

  const [qtdAndamento, setQtdAndamento] = useState(0);
  const [qtdFinalizadas, setQtdFinalizadas] = useState(0);
  const [qtdAguardando, setQtdAguardando] = useState(0);

  const [andamento, setAndamento] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);
  const [aguardando, setAguardando] = useState([]);

  const [session, setSession] = useState<any>({});

  useEffect(() => {
    async function getSession() { 
      let ret:string = await AsyncStorage.getItem("session")??"";
      setSession(JSON.parse(ret));
    }

    getSession();
  }, [])

  useEffect(() => {
    axios({
      method: "GET",
      url: `${global.api.baseURL}/mentoria/quantidade`,
      params: { status: 1 },
      headers: {
        id: session.id,
        token: session.token,
        tipo: session.tipo
      }
    }).then(res => {
      let data = res.data;

      setQtdAndamento(data)
    }).catch(res => {
      console.log(res)
    }).finally(() => {
      setAndamentoLoading(false)
    })

    axios({
      method: "GET",
      url: `${global.api.baseURL}/mentoria/quantidade`,
      params: { status: 3 },
      headers: {
        id: session.id,
        token: session.token,
        tipo: session.tipo
      }
    }).then(res => {
      let data = res.data;

      setQtdFinalizadas(data)
    }).catch(res => {
      console.log(res)
    }).finally(() => {
      setFinalizadasLoading(false)
    })

    axios({
      method: "GET",
      url: `${global.api.baseURL}/mentoria/quantidade`,
      params: { status: 2 },
      headers: {
        id: session.id,
        token: session.token,
        tipo: session.tipo
      }
    }).then(res => {
      let data = res.data;

      setQtdAguardando(data)
    }).catch(res => {
      console.log(res)
    }).finally(() => {
      setAguardandoLoading(false)
    })
  }, [session])

  useEffect(() => {
    axios({
      method: "GET",
      url: `${global.api.baseURL}/mentoria/buscar/usuario`,
      params: { status: 3 },
      headers: {
        id: session.id,
        token: session.token,
        tipo: session.tipo
      }
    })
    .then(res => {
      let data = res.data;

      console.log(data);
      

      setFinalizadas(data);
    })
    .catch(res => {
      console.log(res)
    })
    .finally(() => {
      
      
    })

  }, [session])

  return (
    <Container style={{paddingHorizontal: 0, padding: 0}}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.filter_row}>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>{andamentoLoading? <ActivityIndicator size="large" color={global.colors.textGray} /> : qtdAndamento}</Text>
            <Text style={styles.filter_desc}>Em andamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>{finalizadasLoading? <ActivityIndicator size="large" color={global.colors.textGray} /> : qtdFinalizadas}</Text>
            <Text style={styles.filter_desc}>Finalizadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>{aguardandoLoading? <ActivityIndicator size="large" color={global.colors.textGray} /> : qtdAguardando}</Text>
            <Text style={styles.filter_desc}>Aguardando</Text>
          </TouchableOpacity>
        </View>

        {/* EM ANDAMENTO  */}
        <View style={styles.area}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(em andamento)</Text></Text>

          <ScrollView horizontal={true}>
            <View style={styles.area_item}>
              <View style={styles.area_item_top}>
                <Image style={styles.area_item_pic} source={profile} />

                <View>
                  <Text style={styles.area_item_name}>Afonso Chaves</Text>
                  <Text style={styles.area_item_date}>19/01/2022</Text>
                </View>
              </View>

              <View style={styles.area_item_content}>
                <Text style={styles.area_item_tag}>Design, UX/UI, Photoshop, TI</Text>

                <View style={styles.area_item_message_row}>
                  <Icon name="chat" size={34} color={global.colors.textGray} style={{ marginRight: 6 }} />

                  <View>
                    <Text style={styles.area_item_message_label}>Última mensagem</Text>
                    <Text style={styles.area_item_message_desc}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.area_item_bottom, { justifyContent: 'flex-end' }]}>
                <TouchableOpacity style={styles.area_item_details}>
                  <Text style={styles.area_item_details_desc}>Ver detalhes</Text>
                  <IconFA name="angle-right" size={17} color={global.colors.textGray} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.area_item}>
              <View style={styles.area_item_top}>
                <Image style={styles.area_item_pic} source={profile} />

                <View>
                  <Text style={styles.area_item_name}>Afonso Chaves</Text>
                  <Text style={styles.area_item_date}>19/01/2022</Text>
                </View>
              </View>

              <View style={styles.area_item_content}>
                <Text style={styles.area_item_tag}>Design, UX/UI, Photoshop, TI</Text>

                <View style={styles.area_item_message_row}>
                  <Icon name="chat" size={34} color={global.colors.textGray} style={{ marginRight: 6 }} />

                  <View>
                    <Text style={styles.area_item_message_label}>Última mensagem</Text>
                    <Text style={styles.area_item_message_desc}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.area_item_bottom, { justifyContent: 'flex-end' }]}>
                <TouchableOpacity style={styles.area_item_details}>
                  <Text style={styles.area_item_details_desc}>Ver detalhes</Text>
                  <IconFA name="angle-right" size={17} color={global.colors.textGray} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* AGUARDANDO */}
        <View style={styles.area}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(aguardando)</Text></Text>

          <ScrollView horizontal={true}>
            <View style={styles.area_item}>
              <View style={styles.area_item_top}>
                <Image style={styles.area_item_pic} source={profile} />

                <View>
                  <Text style={styles.area_item_name}>Afonso Chaves</Text>
                  <Text style={styles.area_item_date}>19/01/2022</Text>
                </View>
              </View>

              <View style={styles.area_item_bottom}>
                <TouchableOpacity style={styles.area_item_details}>
                  <IconFA name="clock-o" size={17} color={global.colors.warning} style={{ marginRight: 5 }} />
                  <Text style={styles.area_item_details_desc_white}>Aguardando</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.area_item_details}>
                  <Text style={styles.area_item_details_desc}>Ver detalhes</Text>
                  <IconFA name="angle-right" size={17} color={global.colors.textGray} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.area_item}>
              <View style={styles.area_item_top}>
                <Image style={styles.area_item_pic} source={profile} />

                <View>
                  <Text style={styles.area_item_name}>Afonso Chaves</Text>
                  <Text style={styles.area_item_date}>19/01/2022</Text>
                </View>
              </View>

              <View style={styles.area_item_bottom}>
                <TouchableOpacity style={styles.area_item_details}>
                  <IconFT name="block" size={17} color={global.colors.danger} style={{ marginRight: 5 }} />
                  <Text style={styles.area_item_details_desc_white}>Recusada</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.area_item_details}>
                  <Text style={styles.area_item_details_desc}>Ver detalhes</Text>
                  <IconFA name="angle-right" size={17} color={global.colors.textGray} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* FINALIZADAS */}
        <View style={[styles.area, { marginBottom: 100 }]}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(finalizadas)</Text></Text>

          <ScrollView horizontal={true}>
            {
              finalizadas.map((item, index) => {
                let data_inicio = new Date(item.data_inicio).toLocaleDateString();
                let data_fim = new Date(item.data_fim).toLocaleDateString();

                return(
                  <View key={index} style={styles.area_item}>
                    <View style={styles.area_item_top}>
                      <Image style={styles.area_item_pic} source={profile} />

                      <View>
                        <Text style={styles.area_item_name}>{item.nome}</Text>
                        <Text style={styles.area_item_date}>{data_inicio.toString()} - <IconFT name="flag" size={20} color={global.colors.green} /> {data_fim}</Text>
                      </View>
                    </View>

                    <View style={styles.area_item_bottom}>
                      <TouchableOpacity style={styles.area_item_details}>
                        <IconIO name="document" size={17} color={global.colors.textGray} style={{ marginRight: 5 }} />
                        <Text style={styles.area_item_details_desc}>Ver Comprovante</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.area_item_details}>
                        <Text style={styles.area_item_details_desc}>Ver detalhes</Text>
                        <IconFA name="angle-right" size={17} color={global.colors.textGray} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("App", { screen: "Mentory" })}}>
        <IconAD name="plus" color="#FFF" size={30} />
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  filter_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  filter: {
    padding: 14,
    paddingHorizontal: 10,
    backgroundColor: global.colors.lightGray,
    maxWidth: '32%',
    width: '100%',
    borderRadius: 6,
    alignItems: 'center'
  },

  filter_number: {
    fontSize: 34,
    textAlign: 'center',
    fontFamily: global.fonts.SourceSansPro.w900,
  },
  
  filter_desc: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: global.fonts.SourceSansPro.w700
  },

  area: {
    marginBottom: 20
  },

  area_title: {
    fontSize: 22,
    fontFamily: global.fonts.SourceSansPro.w700,
    color: global.colors.textGray,
    marginBottom: 10
  },
  
  area_subtitle: {
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: global.fonts.SourceSansPro.w700,
    color: global.colors.lighterGray,
  },

  area_item: {
    padding: 20,
    backgroundColor: global.colors.lightGray,
    minWidth: 340,
    borderRadius: 10,
    marginRight: 20,
  },

  area_item_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  area_item_pic: {
    width: 60,
    height: 60,
    borderRadius: 5000,
    marginRight: 10
  },
  
  area_item_name: {
    fontSize: 18,
    fontFamily: global.fonts.SourceSansPro.w600
  },
  
  area_item_date: {
    fontSize: 14,
    fontFamily: global.fonts.SourceSansPro.w600,
    // lineHeight: 14,
  },

  area_item_content: {
    marginTop: 10
  },
  
  area_item_tag: {
    fontFamily: global.fonts.SourceSansPro.w700,
    fontSize: 14,
    marginBottom: 15
  },

  area_item_message_row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  area_item_message_label: {
    fontFamily: global.fonts.SourceSansPro.w700,
    fontSize: 14,
    lineHeight: 16
  },
  
  area_item_message_desc: {
    fontFamily: global.fonts.SourceSansPro.w400,
    fontSize: 13,
    color: "#FFF",
    lineHeight: 15
  },

  area_item_details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  area_item_details_desc: {
    fontSize: 14,
    fontFamily: global.fonts.SourceSansPro.w700,
    marginRight: 8
  },

  area_item_details_desc_white: {
    fontSize: 14,
    fontFamily: global.fonts.SourceSansPro.w700,
    marginRight: 8,
    color: "#FFF"
  },

  area_item_bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },

  button: {
    backgroundColor: global.colors.success,
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center'
  }
});