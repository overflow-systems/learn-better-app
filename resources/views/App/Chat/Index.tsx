//? UTILS
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../../globals/global';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useEffect, useState } from 'react';

const Profile = require('../../../../assets/images/profile.png');

//? COMPONENTS
import Container from '../../../components/Container';

export default function Chat_Index ({navigation}:any) {
  return (
    <Container style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <ScrollView>
        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("App", { screen: "Chat" })}} style={styles.list_item}>
          <Image source={Profile} style={styles.list_item_pic}/>

          <View style={styles.list_item_text}>
            <Text style={styles.list_item_name}>Afonso Chaves</Text>
            <Text style={styles.list_item_message}>Olá Ismael, podemos fazer uma call?</Text>
          </View>

          <Text style={styles.list_item_hour}>21:01</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  list_item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },

  list_item_pic: {
    width: 54,
    height: 54,
    borderRadius: 5000,
    marginRight: 20
  },

  list_item_text: {
    flex: 1
  },

  list_item_name: {
    fontFamily: global.fonts.SourceSansPro.w700,
  },

  list_item_message: {
    fontSize: 14
  },

  list_item_hour: {
    fontSize: 13,
    marginBottom: 'auto',
    marginTop: 10,
    marginLeft: 20
  }
});