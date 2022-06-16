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

export default function Index ({route, navigation}:any) {
  const [qtdAndamento, setQtdAndamento] = useState<number|null>(null);
  const [qtdFinalizadas, setQtdFinalizadas] = useState<number|null>(null);
  const [qtdAguardando, setQtdAguardando] = useState<number|null>(null);

  const [andamento, setAndamento] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);
  const [aguardando, setAguardando] = useState([]);

  const { session } = route.params;

  const getValues = async () => {
    let { qtAndamento, qtAguardando, qtFinalizadas } = await global.api.methods.mentoriaQuantidade(session);

    setQtdAndamento(qtAndamento);
    setQtdAguardando(qtAguardando);
    setQtdFinalizadas(qtFinalizadas);

    let { andamento, aguardando, finalizadas } = await global.api.methods.mentoriaPerfil(session);
    
    setAndamento(andamento);
    setAguardando(aguardando);
    setFinalizadas(finalizadas);
  }

  useEffect(() => {
    getValues();
  }, [])

  return (
    <Container style={{paddingHorizontal: 0, padding: 0}}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.filter_row}>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>
              {
                qtdAndamento == null ?
                  <ActivityIndicator size="large" color={global.colors.textGray} />
                : qtdAndamento
              }
              </Text>
            <Text style={styles.filter_desc}>Em andamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>
              {
                qtdAguardando == null ?
                  <ActivityIndicator size="large" color={global.colors.textGray} />
                : qtdAguardando
              }
            </Text>
            <Text style={styles.filter_desc}>Aguardando</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filter_number}>
              {
                qtdFinalizadas == null ?
                  <ActivityIndicator size="large" color={global.colors.textGray} />
                : qtdFinalizadas
              }
            </Text>
            <Text style={styles.filter_desc}>Finalizadas</Text>
          </TouchableOpacity>
        </View>

        {/* EM ANDAMENTO  */}
        <View style={styles.area}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(em andamento)</Text></Text>

          <ScrollView horizontal={true}>
            {
              andamento.map((item:any, index) => {
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
                )
              })
            }
          </ScrollView>
        </View>

        {/* AGUARDANDO */}
        <View style={styles.area}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(aguardando)</Text></Text>

          <ScrollView horizontal={true}>
            {
              aguardando.map((item:any, index) => {
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
                      <View style={styles.area_item_details}>
                        <IconFA name="clock-o" size={17} color={global.colors.warning} style={{ marginRight: 5 }} />
                        <Text style={styles.area_item_details_desc_white}>Aguardando</Text>
                      </View>

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

        {/* FINALIZADAS */}
        <View style={[styles.area, { marginBottom: 100 }]}>
          <Text style={styles.area_title}>Mentorias <Text style={styles.area_subtitle}>(finalizadas)</Text></Text>

          <ScrollView horizontal={true}>
            {
              finalizadas.map((item:any, index) => {
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
    alignItems: 'flex-start',
    marginBottom: 20
  },

  filter: {
    padding: 14,
    paddingHorizontal: 10,
    backgroundColor: global.colors.lightGray,
    maxWidth: '32%',
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    minHeight: 95
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
    alignItems: 'center',
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
    marginTop: 10,
  },
  
  area_item_tag: {
    fontFamily: global.fonts.SourceSansPro.w700,
    fontSize: 14,
    marginBottom: 15
  },

  area_item_message_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 'auto'
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
    marginTop: 10,
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