//? UTILS
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { global } from '../../../globals/global';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';


const Profile = require('../../../assets/images/profile.png');

export default function Header ({text}:any) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={{marginRight: 20}} onPress={() => {navigation.goBack()}}>
        <Icon name="back" size={30} color={global.colors.textGray}/>
      </TouchableOpacity>

      <View style={styles.profile_container}>
        <View style={styles.profile}>
          <Image source={Profile} style={styles.pic} />

          <View>
            <Text style={styles.name}>Afonso Chaves</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, { marginRight: 10 }]}>
            <IconFA name="phone" size={28} color={global.colors.textGray}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconFA name="video-camera" size={28} color={global.colors.textGray}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingRight: 30
  },
  
  profile_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  pic: {
    width: 50,
    height: 50,
    borderRadius: 5000,
    marginRight: 10
  },

  name: {
    fontSize: 17,
    fontFamily: global.fonts.SourceSansPro.w600
  },

  status: {
    fontSize: 14
  },
  
  buttons: {
    flexDirection: 'row'
  },

  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
