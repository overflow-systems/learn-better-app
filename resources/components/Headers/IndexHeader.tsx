//? UTILS
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { global } from '../../../globals/global';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';

const profile = require('../../../assets/images/profile.png');

export default function Header ({navigation}:any) {

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.left}>
        <Image source={profile} style={styles.pic} />

        <Text style={styles.welcome}>Olá Ismael</Text>

        <Icon name="angle-down" color={global.colors.textGray} size={20} style={{ marginLeft: 5 }} />
      </TouchableOpacity>

      <View style={styles.right}>
        <TouchableOpacity style={[styles.icon, { marginRight: 10 }]} onPress={() => navigation.navigate("App", { screen: "Chat_Index" })}>
          <IconMC name="chat" size={34} color={global.colors.textGray} />
          <View style={styles.notify} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("App", { screen: "Notifications" })}>
          <IconM name="notifications" size={34} color={global.colors.textGray} />
          <View style={styles.notify} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingRight: 30,
    flex: 1
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pic: {
    width: 40,
    height: 40,
    borderRadius: 5000,
    marginRight: 10
  },

  welcome: {
    fontSize: 14,
    color: "#FFF"
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },

  notify: {
    width: 7,
    height: 7,
    borderRadius: 5000,
    backgroundColor: "#FFF",
    position: 'absolute',
    right: 7,
    bottom: 7
  }
});
