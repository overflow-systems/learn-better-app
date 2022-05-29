//? UTILS
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../../globals/global';

import Stars from '../../../components/Stars';

const Pic = require("../../../../assets/images/profile.png")

import IconFT from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

//? COMPONENTS
import Container from '../../../components/Container';

export default function Mentory ({navigation}:any) {

  return (
    <Container style={{ paddingVertical: 0 }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <View style={styles.pic_container}>
            <Image source={Pic} style={styles.pic} />
          </View>

          <Text style={styles.name}>Ismael Rafael da Silva Sousa</Text>
          <Text style={styles.tags}>Design, UX/UI, Photoshop, TI, Programação, +30...</Text>
          <Text style={styles.member}>Membro desde 19/01/2022</Text>

          <Stars avaliation={4.8} />

          <View style={styles.desc_container}>
            <Text style={styles.desc}>
              Sou formado no curso de Análise e Desenvolvimento de Sistemas pela Fatec de Praia Grande, já desenvolvi diversos sites e sistemas para clientes de grande e médio porte, além disso, já lecionei um curso de Programação Web para iniciantes durante 5 anos.
            </Text>
          </View>
        </View>


        {/* TODO: circular progress */}

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.circle}>
              <IconFT name="angle-left" color={global.colors.textGray} size={36} />
            </View>
            <Text style={styles.button_text}>Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={[styles.circle, { width: 70, height: 70 } ]}>
              <Icon name="search" color={"#FFF"} size={30} />
            </View>
            <Text style={styles.button_text}>Ver detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.circle}>
              <IconFT name="angle-right" color={global.colors.textGray} size={36} />
            </View>
            <Text style={styles.button_text}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
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

  name: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 10,
    fontFamily: global.fonts.SourceSansPro.w600
  },

  tags: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: global.fonts.SourceSansPro.w700
  },

  member: {
    textAlign: 'center',
    fontSize: 18,
    color: global.colors.lighterGray,
    fontFamily: global.fonts.SourceSansPro.w600,
    marginBottom: 20
  },

  desc_container: {
    marginVertical: 20
  },

  desc: {
    textAlign: 'center',
    maxWidth: 380,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: global.fonts.SourceSansPro.w400
  },

  bottom: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 40
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
    width: 60,
    height: 60,
    borderRadius: 500,
    backgroundColor: global.colors.lightGray
  },

  button_text: {
    fontFamily: global.fonts.SourceSansPro.w600
  }
});