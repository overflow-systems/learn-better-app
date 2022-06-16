//? UTILS
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../../globals/global';

import Stars from '../../../components/Stars';

const Pic = require("../../../../assets/images/profile.png")

import IconFT from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

//? COMPONENTS
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';

export default function Mentory ({route, navigation}:any) {
  const [mentores, setMentores] = useState<any[]>([]);
  const [mentor, setMentor] = useState<any>(null);
  const [active, setActive] = useState(0);

  const { session } = route.params;

  const getMentores = async () => {
    let retorno:any[] = await global.api.methods.buscarMentor(session);

    setMentores(retorno);
    setMentor(retorno[active]);
  }

  useEffect(() => {
    getMentores();
  }, [])

  useEffect(() => {
    setMentor(mentores[active]);
  }, [active])

  return (
    <Container style={{ paddingVertical: 0 }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <View style={styles.pic_container}>
            <Image source={Pic} style={styles.pic} />
          </View>

          <Text style={styles.name}>{mentor?.nome}</Text>
          <Text style={styles.tags}>{mentor?.tags}</Text>
          <Text style={styles.member}>Membro desde {mentor?.data_criacao}</Text>

          <Stars avaliation={mentor?.nota??0} />

          <View style={styles.desc_container}>
            <Text style={styles.desc}>
              {mentor?.apresentacao}
            </Text>
          </View>
        </View>


        {/* TODO: circular progress */}

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={() => { setActive(active > 0 ? active-1 : active) }}>
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

          <TouchableOpacity style={styles.button} onPress={() => { setActive(active < mentores.length - 1 ? active + 1 : active) }}>
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