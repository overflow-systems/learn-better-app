//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../globals/global';

import Icon from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { useEffect, useState } from 'react';

//? COMPONENTS
import Container from '../../components/Container';

export default function Notifications ({navigation}:any) {
  return (
    <Container style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <ScrollView style={styles.list}>
        <View style={styles.item}>
          <View style={styles.notification} />
          
          <View>
            <Text style={styles.title}>Afonso Chaves</Text>
            <Text style={styles.text}>Status da mentoria alterado para: <Icon name="flag" size={18} color={global.colors.green} /> <Text style={{ color: global.colors.green }}>Concluído</Text></Text>
          </View>

          <Text style={styles.hour}>21:01</Text>
        </View>

        <View style={styles.item}>
          {/* <View style={styles.notification} /> */}

          <View>
            <Text style={styles.title}>Afonso Chaves</Text>
            <Text style={styles.text}>Aceitou sua proposta de mentoria.</Text>
          </View>

          <Text style={styles.hour}>21:01</Text>
        </View>

        <View style={styles.item}>
          {/* <View style={styles.notification} /> */}

          <View>
            <Text style={styles.title}>Afonso Chaves</Text>
            <Text style={styles.text}>Status da mentoria alterado para: <IconFA name="clock-o" size={18} color={global.colors.warning} /> <Text style={{ color: global.colors.warning }}>Aguardando</Text></Text>
          </View>

          <Text style={styles.hour}>21:01</Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20
  },

  notification: {
    width: 5,
    height: 5,
    borderRadius: 500,
    backgroundColor: global.colors.textGray,
    position: 'absolute',
    left: 0
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    marginBottom: 30
  },

  hour: {
    fontSize: 13,
    marginBottom: 'auto',
    marginTop: 10,
    marginLeft: 20
  },

  title: {
    fontFamily: global.fonts.SourceSansPro.w700,
    fontSize: 18
  },

  text: {
    lineHeight: 20
  }
});